import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('restaurant_saas_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh token
        const refreshToken = localStorage.getItem('restaurant_saas_refresh_token');
        if (refreshToken) {
          const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/auth/refresh/`,
            { refresh: refreshToken }
          );

          const { access } = response.data;
          localStorage.setItem('restaurant_saas_token', access);

          // Retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${access}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, clear tokens and redirect to login
        localStorage.removeItem('restaurant_saas_token');
        localStorage.removeItem('restaurant_saas_refresh_token');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

// Auth API methods
export const authAPI = {
  // Customer authentication
  customerLogin: (credentials) => api.post('/auth/customer/login/', credentials),
  customerRegister: (userData) => api.post('/auth/customer/register/', userData),
  
  // Restaurant authentication
  restaurantLogin: (credentials) => api.post('/auth/restaurant/login/', credentials),
  restaurantRegister: (restaurantData) => api.post('/auth/restaurant/register/', restaurantData),
  
  // Admin authentication
  adminLogin: (credentials) => api.post('/auth/admin/login/', credentials),
  
  // Common auth methods
  refreshToken: (refreshToken) => api.post('/auth/refresh/', { refresh: refreshToken }),
  logout: () => api.post('/auth/logout/'),
  forgotPassword: (email) => api.post('/auth/forgot-password/', { email }),
  resetPassword: (token, password) => api.post('/auth/reset-password/', { token, password }),
  
  // Get current user info
  getCurrentUser: () => api.get('/auth/me/'),
};

// Restaurant API methods
export const restaurantAPI = {
  // Menu management
  getMenu: () => api.get('/restaurant/menu/'),
  createMenuItem: (itemData) => api.post('/restaurant/menu/', itemData),
  updateMenuItem: (id, itemData) => api.put(`/restaurant/menu/${id}/`, itemData),
  deleteMenuItem: (id) => api.delete(`/restaurant/menu/${id}/`),
  
  // Orders
  getOrders: (params) => api.get('/restaurant/orders/', { params }),
  getOrder: (id) => api.get(`/restaurant/orders/${id}/`),
  updateOrderStatus: (id, status) => api.patch(`/restaurant/orders/${id}/`, { status }),
  
  // Tables
  getTables: () => api.get('/restaurant/tables/'),
  createTable: (tableData) => api.post('/restaurant/tables/', tableData),
  updateTable: (id, tableData) => api.put(`/restaurant/tables/${id}/`, tableData),
  deleteTable: (id) => api.delete(`/restaurant/tables/${id}/`),
  
  // Inventory
  getInventory: () => api.get('/restaurant/inventory/'),
  updateInventory: (id, inventoryData) => api.patch(`/restaurant/inventory/${id}/`, inventoryData),
  
  // Employees
  getEmployees: () => api.get('/restaurant/employees/'),
  createEmployee: (employeeData) => api.post('/restaurant/employees/', employeeData),
  updateEmployee: (id, employeeData) => api.put(`/restaurant/employees/${id}/`, employeeData),
  deleteEmployee: (id) => api.delete(`/restaurant/employees/${id}/`),
  
  // Reports
  getSalesReport: (params) => api.get('/restaurant/reports/sales/', { params }),
  getInventoryReport: (params) => api.get('/restaurant/reports/inventory/', { params }),
};

// Admin API methods
export const adminAPI = {
  // Restaurant management
  getRestaurants: (params) => api.get('/admin/restaurants/', { params }),
  getRestaurant: (id) => api.get(`/admin/restaurants/${id}/`),
  createRestaurant: (restaurantData) => api.post('/admin/restaurants/', restaurantData),
  updateRestaurant: (id, restaurantData) => api.put(`/admin/restaurants/${id}/`, restaurantData),
  deleteRestaurant: (id) => api.delete(`/admin/restaurants/${id}/`),
  
  // User management
  getUsers: (params) => api.get('/admin/users/', { params }),
  getUser: (id) => api.get(`/admin/users/${id}/`),
  createUser: (userData) => api.post('/admin/users/', userData),
  updateUser: (id, userData) => api.put(`/admin/users/${id}/`, userData),
  deleteUser: (id) => api.delete(`/admin/users/${id}/`),
  
  // Subscriptions
  getSubscriptions: (params) => api.get('/admin/subscriptions/', { params }),
  updateSubscription: (id, subscriptionData) => api.patch(`/admin/subscriptions/${id}/`, subscriptionData),
  
  // Analytics
  getDashboardStats: () => api.get('/admin/analytics/dashboard/'),
  getRevenueStats: (params) => api.get('/admin/analytics/revenue/', { params }),
};

// Customer API methods
export const customerAPI = {
  // Orders
  getOrders: (params) => api.get('/customer/orders/', { params }),
  getOrder: (id) => api.get(`/customer/orders/${id}/`),
  createOrder: (orderData) => api.post('/customer/orders/', orderData),
  cancelOrder: (id) => api.post(`/customer/orders/${id}/cancel/`),
  
  // Profile
  getProfile: () => api.get('/customer/profile/'),
  updateProfile: (profileData) => api.put('/customer/profile/', profileData),
  
  // Favorites
  getFavorites: () => api.get('/customer/favorites/'),
  addToFavorites: (restaurantId) => api.post('/customer/favorites/', { restaurant_id: restaurantId }),
  removeFromFavorites: (restaurantId) => api.delete(`/customer/favorites/${restaurantId}/`),
};

// Utility functions
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('restaurant_saas_token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('restaurant_saas_token');
    delete api.defaults.headers.common['Authorization'];
  }
};

export const setRefreshToken = (refreshToken) => {
  if (refreshToken) {
    localStorage.setItem('restaurant_saas_refresh_token', refreshToken);
  } else {
    localStorage.removeItem('restaurant_saas_refresh_token');
  }
};

export const clearAuthTokens = () => {
  localStorage.removeItem('restaurant_saas_token');
  localStorage.removeItem('restaurant_saas_refresh_token');
  delete api.defaults.headers.common['Authorization'];
};

export default api;

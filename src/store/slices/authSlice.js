import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI, setAuthToken, setRefreshToken, clearAuthTokens } from '../../services/api';

// Helper function to generate notification ID
let notificationId = 0;
const generateNotificationId = () => `notification_${Date.now()}_${notificationId++}`;

// Async thunks for authentication actions
export const customerLogin = createAsyncThunk(
  'auth/customerLogin',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authAPI.customerLogin(credentials);
      const { access, refresh, user } = response.data;
      
      // Set tokens in localStorage and axios headers
      setAuthToken(access);
      setRefreshToken(refresh);
      
      return { user, access, refresh };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const restaurantLogin = createAsyncThunk(
  'auth/restaurantLogin',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authAPI.restaurantLogin(credentials);
      const { access, refresh, user } = response.data;
      
      // Set tokens in localStorage and axios headers
      setAuthToken(access);
      setRefreshToken(refresh);
      
      return { user, access, refresh };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const adminLogin = createAsyncThunk(
  'auth/adminLogin',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authAPI.adminLogin(credentials);
      const { access, refresh, user } = response.data;
      
      // Set tokens in localStorage and axios headers
      setAuthToken(access);
      setRefreshToken(refresh);
      
      return { user, access, refresh };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const customerRegister = createAsyncThunk(
  'auth/customerRegister',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authAPI.customerRegister(userData);
      const { access, refresh, user } = response.data;
      
      // Set tokens in localStorage and axios headers
      setAuthToken(access);
      setRefreshToken(refresh);
      
      return { user, access, refresh };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

export const restaurantRegister = createAsyncThunk(
  'auth/restaurantRegister',
  async (restaurantData, { rejectWithValue }) => {
    try {
      const response = await authAPI.restaurantRegister(restaurantData);
      const { access, refresh, user } = response.data;
      
      // Set tokens in localStorage and axios headers
      setAuthToken(access);
      setRefreshToken(refresh);
      
      return { user, access, refresh };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authAPI.logout();
      // Clear tokens from localStorage and axios headers
      clearAuthTokens();
      return null;
    } catch (error) {
      // Even if logout API fails, clear local tokens
      clearAuthTokens();
      return rejectWithValue(error.response?.data?.message || 'Logout failed');
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.getCurrentUser();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get user info');
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await authAPI.forgotPassword(email);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to send reset email');
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const response = await authAPI.resetPassword(token, password);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to reset password');
    }
  }
);

// Initial state
const initialState = {
  user: null,
  token: localStorage.getItem('restaurant_saas_token'),
  refreshToken: localStorage.getItem('restaurant_saas_refresh_token'),
  isAuthenticated: !!localStorage.getItem('restaurant_saas_token'),
  userType: null, // 'customer', 'restaurant', 'admin'
  loading: false,
  error: null,
  forgotPasswordLoading: false,
  forgotPasswordError: null,
  forgotPasswordSuccess: false,
};

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearForgotPasswordError: (state) => {
      state.forgotPasswordError = null;
    },
    clearForgotPasswordSuccess: (state) => {
      state.forgotPasswordSuccess = false;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    // Initialize auth state from localStorage
    initializeAuth: (state) => {
      const token = localStorage.getItem('restaurant_saas_token');
      const refreshToken = localStorage.getItem('restaurant_saas_refresh_token');
      
      if (token) {
        state.token = token;
        state.refreshToken = refreshToken;
        state.isAuthenticated = true;
        // Set auth token in axios headers
        setAuthToken(token);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Customer Login
      .addCase(customerLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(customerLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.userType = 'customer';
        state.error = null;
      })
      .addCase(customerLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Restaurant Login
      .addCase(restaurantLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(restaurantLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.userType = 'restaurant';
        state.error = null;
      })
      .addCase(restaurantLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Admin Login
      .addCase(adminLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.userType = 'admin';
        state.error = null;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Customer Register
      .addCase(customerRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(customerRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.userType = 'customer';
        state.error = null;
      })
      .addCase(customerRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Restaurant Register
      .addCase(restaurantRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(restaurantRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.userType = 'restaurant';
        state.error = null;
      })
      .addCase(restaurantRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Logout
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.userType = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
        // Even if logout fails, clear the state
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.userType = null;
      })
      
      // Get Current User
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // If getting current user fails, user might not be authenticated
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.userType = null;
        clearAuthTokens();
      })
      
      // Forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.forgotPasswordLoading = true;
        state.forgotPasswordError = null;
        state.forgotPasswordSuccess = false;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.forgotPasswordLoading = false;
        state.forgotPasswordSuccess = true;
        state.forgotPasswordError = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.forgotPasswordLoading = false;
        state.forgotPasswordError = action.payload;
        state.forgotPasswordSuccess = false;
      })
      
      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearError,
  clearForgotPasswordError,
  clearForgotPasswordSuccess,
  setUserType,
  initializeAuth,
} = authSlice.actions;

export default authSlice.reducer;

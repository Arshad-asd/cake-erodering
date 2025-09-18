import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { restaurantAPI } from '../../services/api';

// Async thunks for restaurant actions
export const fetchMenu = createAsyncThunk(
  'restaurant/fetchMenu',
  async (_, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.getMenu();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch menu');
    }
  }
);

export const createMenuItem = createAsyncThunk(
  'restaurant/createMenuItem',
  async (itemData, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.createMenuItem(itemData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create menu item');
    }
  }
);

export const updateMenuItem = createAsyncThunk(
  'restaurant/updateMenuItem',
  async ({ id, itemData }, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.updateMenuItem(id, itemData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update menu item');
    }
  }
);

export const deleteMenuItem = createAsyncThunk(
  'restaurant/deleteMenuItem',
  async (id, { rejectWithValue }) => {
    try {
      await restaurantAPI.deleteMenuItem(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete menu item');
    }
  }
);

export const fetchOrders = createAsyncThunk(
  'restaurant/fetchOrders',
  async (params, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.getOrders(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch orders');
    }
  }
);

export const fetchOrder = createAsyncThunk(
  'restaurant/fetchOrder',
  async (id, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.getOrder(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch order');
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  'restaurant/updateOrderStatus',
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.updateOrderStatus(id, status);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update order status');
    }
  }
);

export const fetchTables = createAsyncThunk(
  'restaurant/fetchTables',
  async (_, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.getTables();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch tables');
    }
  }
);

export const createTable = createAsyncThunk(
  'restaurant/createTable',
  async (tableData, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.createTable(tableData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create table');
    }
  }
);

export const updateTable = createAsyncThunk(
  'restaurant/updateTable',
  async ({ id, tableData }, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.updateTable(id, tableData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update table');
    }
  }
);

export const deleteTable = createAsyncThunk(
  'restaurant/deleteTable',
  async (id, { rejectWithValue }) => {
    try {
      await restaurantAPI.deleteTable(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete table');
    }
  }
);

export const fetchInventory = createAsyncThunk(
  'restaurant/fetchInventory',
  async (_, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.getInventory();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch inventory');
    }
  }
);

export const updateInventory = createAsyncThunk(
  'restaurant/updateInventory',
  async ({ id, inventoryData }, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.updateInventory(id, inventoryData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update inventory');
    }
  }
);

export const fetchEmployees = createAsyncThunk(
  'restaurant/fetchEmployees',
  async (_, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.getEmployees();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch employees');
    }
  }
);

export const createEmployee = createAsyncThunk(
  'restaurant/createEmployee',
  async (employeeData, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.createEmployee(employeeData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create employee');
    }
  }
);

export const updateEmployee = createAsyncThunk(
  'restaurant/updateEmployee',
  async ({ id, employeeData }, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.updateEmployee(id, employeeData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update employee');
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  'restaurant/deleteEmployee',
  async (id, { rejectWithValue }) => {
    try {
      await restaurantAPI.deleteEmployee(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete employee');
    }
  }
);

export const fetchSalesReport = createAsyncThunk(
  'restaurant/fetchSalesReport',
  async (params, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.getSalesReport(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch sales report');
    }
  }
);

export const fetchInventoryReport = createAsyncThunk(
  'restaurant/fetchInventoryReport',
  async (params, { rejectWithValue }) => {
    try {
      const response = await restaurantAPI.getInventoryReport(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch inventory report');
    }
  }
);

// Initial state
const initialState = {
  // Menu
  menu: [],
  menuLoading: false,
  menuError: null,
  
  // Orders
  orders: [],
  currentOrder: null,
  ordersLoading: false,
  ordersError: null,
  
  // Tables
  tables: [],
  tablesLoading: false,
  tablesError: null,
  
  // Inventory
  inventory: [],
  inventoryLoading: false,
  inventoryError: null,
  
  // Employees
  employees: [],
  employeesLoading: false,
  employeesError: null,
  
  // Reports
  salesReport: null,
  inventoryReport: null,
  reportsLoading: false,
  reportsError: null,
  
  // General
  loading: false,
  error: null,
};

// Restaurant slice
const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearMenuError: (state) => {
      state.menuError = null;
    },
    clearOrdersError: (state) => {
      state.ordersError = null;
    },
    clearTablesError: (state) => {
      state.tablesError = null;
    },
    clearInventoryError: (state) => {
      state.inventoryError = null;
    },
    clearEmployeesError: (state) => {
      state.employeesError = null;
    },
    clearReportsError: (state) => {
      state.reportsError = null;
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Menu
      .addCase(fetchMenu.pending, (state) => {
        state.menuLoading = true;
        state.menuError = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.menuLoading = false;
        state.menu = action.payload;
        state.menuError = null;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.menuLoading = false;
        state.menuError = action.payload;
      })
      
      .addCase(createMenuItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createMenuItem.fulfilled, (state, action) => {
        state.loading = false;
        state.menu.push(action.payload);
        state.error = null;
      })
      .addCase(createMenuItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(updateMenuItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMenuItem.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.menu.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.menu[index] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateMenuItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(deleteMenuItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMenuItem.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = state.menu.filter(item => item.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteMenuItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Orders
      .addCase(fetchOrders.pending, (state) => {
        state.ordersLoading = true;
        state.ordersError = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.ordersLoading = false;
        state.orders = action.payload;
        state.ordersError = null;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.ordersLoading = false;
        state.ordersError = action.payload;
      })
      
      .addCase(fetchOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
        state.error = null;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(updateOrderStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.orders.findIndex(order => order.id === action.payload.id);
        if (index !== -1) {
          state.orders[index] = action.payload;
        }
        if (state.currentOrder && state.currentOrder.id === action.payload.id) {
          state.currentOrder = action.payload;
        }
        state.error = null;
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Tables
      .addCase(fetchTables.pending, (state) => {
        state.tablesLoading = true;
        state.tablesError = null;
      })
      .addCase(fetchTables.fulfilled, (state, action) => {
        state.tablesLoading = false;
        state.tables = action.payload;
        state.tablesError = null;
      })
      .addCase(fetchTables.rejected, (state, action) => {
        state.tablesLoading = false;
        state.tablesError = action.payload;
      })
      
      .addCase(createTable.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTable.fulfilled, (state, action) => {
        state.loading = false;
        state.tables.push(action.payload);
        state.error = null;
      })
      .addCase(createTable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(updateTable.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTable.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.tables.findIndex(table => table.id === action.payload.id);
        if (index !== -1) {
          state.tables[index] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateTable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(deleteTable.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTable.fulfilled, (state, action) => {
        state.loading = false;
        state.tables = state.tables.filter(table => table.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteTable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Inventory
      .addCase(fetchInventory.pending, (state) => {
        state.inventoryLoading = true;
        state.inventoryError = null;
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.inventoryLoading = false;
        state.inventory = action.payload;
        state.inventoryError = null;
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.inventoryLoading = false;
        state.inventoryError = action.payload;
      })
      
      .addCase(updateInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateInventory.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.inventory.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.inventory[index] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Employees
      .addCase(fetchEmployees.pending, (state) => {
        state.employeesLoading = true;
        state.employeesError = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employeesLoading = false;
        state.employees = action.payload;
        state.employeesError = null;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.employeesLoading = false;
        state.employeesError = action.payload;
      })
      
      .addCase(createEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.push(action.payload);
        state.error = null;
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(updateEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.employees.findIndex(employee => employee.id === action.payload.id);
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(deleteEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = state.employees.filter(employee => employee.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Reports
      .addCase(fetchSalesReport.pending, (state) => {
        state.reportsLoading = true;
        state.reportsError = null;
      })
      .addCase(fetchSalesReport.fulfilled, (state, action) => {
        state.reportsLoading = false;
        state.salesReport = action.payload;
        state.reportsError = null;
      })
      .addCase(fetchSalesReport.rejected, (state, action) => {
        state.reportsLoading = false;
        state.reportsError = action.payload;
      })
      
      .addCase(fetchInventoryReport.pending, (state) => {
        state.reportsLoading = true;
        state.reportsError = null;
      })
      .addCase(fetchInventoryReport.fulfilled, (state, action) => {
        state.reportsLoading = false;
        state.inventoryReport = action.payload;
        state.reportsError = null;
      })
      .addCase(fetchInventoryReport.rejected, (state, action) => {
        state.reportsLoading = false;
        state.reportsError = action.payload;
      });
  },
});

export const {
  clearError,
  clearMenuError,
  clearOrdersError,
  clearTablesError,
  clearInventoryError,
  clearEmployeesError,
  clearReportsError,
  setCurrentOrder,
  clearCurrentOrder,
} = restaurantSlice.actions;

export default restaurantSlice.reducer; 
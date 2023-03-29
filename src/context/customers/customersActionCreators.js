import { SET_CUSTOMERS, SET_ERROR, SET_LOADING } from "./customersReducer";

export const setCustomers = (customers) => ({
  type: SET_CUSTOMERS,
  customers,
});

export const setCustomersLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export const setCustomersError = (error) => ({
  type: SET_ERROR,
  error,
});

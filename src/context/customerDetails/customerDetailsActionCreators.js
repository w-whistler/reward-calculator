import { SET_CUSTOMER_DETAILS, SET_CUSTOMER_DETAILS_ERROR, SET_CUSTOMER_DETAILS_LOADING, SET_CUSTOMER_TRANSACTIONS, SET_CUSTOMER_TRANSACTIONS_ERROR, SET_CUSTOMER_TRANSACTIONS_LOADING } from "./customerDetailsReducer";

export const setCustomerDetails = (customerDetails) => ({
  type: SET_CUSTOMER_DETAILS,
  customerDetails,
});

export const setCustomerDetailsLoading = () => ({
  type: SET_CUSTOMER_DETAILS_LOADING,
});

export const setCustomerDetailsError = (customerDetailsError) => ({
  type: SET_CUSTOMER_DETAILS_ERROR,
  customerDetailsError,
});

export const setCustomerTransactions = (customerTransactions) => ({
  type: SET_CUSTOMER_TRANSACTIONS,
  customerTransactions,
});

export const setCustomerTransactionsLoading = () => ({
  type: SET_CUSTOMER_TRANSACTIONS_LOADING,
});

export const setCustomerTransactionsError = (customerTransactionsError) => ({
  type: SET_CUSTOMER_TRANSACTIONS_ERROR,
  customerTransactionsError,
});

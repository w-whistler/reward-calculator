export const SET_CUSTOMER_DETAILS_LOADING = 'CUSTOMER_DETAILS/SET_CUSTOMER_DETAILS_LOADING';
export const SET_CUSTOMER_DETAILS = 'CUSTOMER_DETAILS/SET_CUSTOMER_DETAILS';
export const SET_CUSTOMER_DETAILS_ERROR = 'CUSTOMER_DETAILS/SET_CUSTOMER_DETAILS_ERROR';
export const SET_CUSTOMER_TRANSACTIONS_LOADING = 'CUSTOMER_DETAILS/SET_CUSTOMER_TRANSACTIONS_LOADING';
export const SET_CUSTOMER_TRANSACTIONS = 'CUSTOMER_DETAILS/SET_CUSTOMER_TRANSACTIONS';
export const SET_CUSTOMER_TRANSACTIONS_ERROR = 'CUSTOMER_DETAILS/SET_CUSTOMER_TRANSACTIONS_ERROR';

export const customerDetailsReducer = (state, action) => {
  switch (action.type) {
    case SET_CUSTOMER_DETAILS_LOADING:
      return {
        ...state,
        loadingCustomerDetails: true,
        customerDetails: null,
        customerDetailsError: null,
        customerTransactions: [],
        customerTransactionsError: null,
      };
    case SET_CUSTOMER_DETAILS:
      return {
        ...state,
        loadingCustomerDetails: false,
        customerDetails: action.customerDetails,
        customerDetailsError: null,
      };
    case SET_CUSTOMER_DETAILS_ERROR:
      return {
        ...state,
        loadingCustomerDetails: false,
        customerDetails: null,
        customerDetailsError: action.customerDetailsError,
      };
    case SET_CUSTOMER_TRANSACTIONS_LOADING:
      return {
        ...state,
        loadingCustomerTransactions: true,
        customerTransactions: [],
        customerTransactionsError: null,
      };
    case SET_CUSTOMER_TRANSACTIONS:
      return {
        ...state,
        loadingCustomerTransactions: false,
        customerTransactions: action.customerTransactions,
        customerTransactionsError: null,
      };
    case SET_CUSTOMER_TRANSACTIONS_ERROR:
      return {
        ...state,
        loadingCustomerTransactions: false,
        customerTransactions: [],
        customerTransactionsError: action.customerTransactionsError,
      };
    default:
      return state;
  }
};

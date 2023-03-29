export const SET_LOADING = 'CUSTOMERS/SET_LOADING';
export const SET_CUSTOMERS = 'CUSTOMERS/SET_CUSTOMERS';
export const SET_ERROR = 'CUSTOMERS/SET_ERROR';

export const customersReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_CUSTOMERS:
      return {
        ...state,
        customers: action.customers,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

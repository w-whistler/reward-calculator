import { createContext, useCallback, useReducer } from "react";
import { API_URL } from "../../constants";
import { setCustomerDetails, setCustomerDetailsError, setCustomerDetailsLoading, setCustomerTransactions, setCustomerTransactionsError, setCustomerTransactionsLoading } from "./customerDetailsActionCreators";
import { customerDetailsReducer } from "./customerDetailsReducer";

export const CustomerDetailsContext = createContext();

export const CustomerDetailsContextController = ({ children }) => {
  const [state, dispatch] = useReducer(customerDetailsReducer, {
    loadingCustomerDetails: false,
    customerDetails: null,
    customerDetailsError: null,
    loadingCustomerTransactions: false,
    customerTransactions: [],
    customerTransactionsError: null,
  });

  const getCustomerDetails = useCallback(async (customerId) => {
    dispatch(setCustomerDetailsLoading());

    try {
      const res = await fetch(`${API_URL}/customers/${customerId}`);

      const customerDetails = await res.json();

      dispatch(setCustomerDetails(customerDetails.data));
    } catch (error) {
      dispatch(setCustomerDetailsError(error));
    }
  }, []);

  const getCustomerTransactions = useCallback(async (customerId) => {
    dispatch(setCustomerTransactionsLoading());
    
    try {
      const res = await fetch(`${API_URL}/customers/${customerId}/transactions`);

      const customerTransactions = await res.json();

      dispatch(setCustomerTransactions(customerTransactions.data));
    } catch (error) {
      dispatch(setCustomerTransactionsError(error));
    }
  }, []);

  return (
    <CustomerDetailsContext.Provider
      value={{
        ...state,
        getCustomerDetails,
        getCustomerTransactions,
      }}
    >
      {children}
    </CustomerDetailsContext.Provider>
  );
};

import { createContext, useEffect, useReducer } from "react"
import { API_URL } from "../../constants";
import { setCustomers, setCustomersError, setCustomersLoading } from "./customersActionCreators";
import { customersReducer } from "./customersReducer";

export const CustomersContext = createContext();

export const CustomersContextController = ({ children }) => {
  const [state, dispatch] = useReducer(customersReducer, {
    customers: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const getCustomers = async () => {
      dispatch(setCustomersLoading(true));
      dispatch(setCustomersError(null));

      try {
        const res = await fetch(`${API_URL}/customers`);
  
        const customersData = await res.json();

        dispatch(setCustomers(customersData.data));
      } catch (error) {
        dispatch(setCustomersError(error));
      } finally {
        dispatch(setCustomersLoading(false));
      }
    };

    getCustomers();
  }, []);

  return (
    <CustomersContext.Provider value={state}>
      {children}
    </CustomersContext.Provider>
  );
};

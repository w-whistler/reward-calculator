import { useContext } from "react"
import { CustomersContext } from "../../context/customers/CustomersContextController";

export const useCustomers = () => {
  const context = useContext(CustomersContext);

  if (!context) {
    throw new Error('useCustomers should be used within a CustomersContextController');
  }

  return context;
};

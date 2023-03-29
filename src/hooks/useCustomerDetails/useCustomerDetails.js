import { useContext } from "react";
import { CustomerDetailsContext } from "../../context/customerDetails/CustomerDetailsContextController";

export const useCustomerDetails = () => {
  const context = useContext(CustomerDetailsContext);

  if (!context) {
    throw new Error('useCustomerDetails should be used within a CustomerDetailsContextController');
  }

  return context;
};

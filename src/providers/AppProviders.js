import { BrowserRouter as Router } from 'react-router-dom';
import { CustomerDetailsContextController } from '../context/customerDetails/CustomerDetailsContextController';
import { CustomersContextController } from "../context/customers/CustomersContextController";

export const AppProviders = ({ children }) => (
  <CustomersContextController>
    <CustomerDetailsContextController>
      <Router>
        {children}
      </Router>
    </CustomerDetailsContextController>
  </CustomersContextController>
);

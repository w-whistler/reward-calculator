import { useNavigate } from "react-router-dom";
import { Table, Spinner } from "../../components";
import { useCustomers } from "../../hooks/useCustomers/useCustomers";
import './Customers.css';

export const Customers = () => {
  const navigate = useNavigate();
  const { loading, customers } = useCustomers();

  const colDefs = [{
    name: 'id',
    renderer: (cell, data) => (
      <span className="customer-id" onClick={() => navigate(`/${cell}`)}>{cell}</span>
    )
  }, {
    name: 'name',
  }];

  return (
    <div className="container">
      <h4 className="text-center">Customers</h4>
      {loading && <Spinner />}
      {!loading && (
        <Table
          colDefs={colDefs}
          rows={customers}
        />
      )}
    </div>
  );
}

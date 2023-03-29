import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components";
import { useCustomerDetails } from "../../hooks/useCustomerDetails/useCustomerDetails";
import { CustomerDetails, CustomerTransactionsTable } from './components';
import './CustomerTransactions.css';
import { calculateRewardPointsForMultipleTransactions } from "./utils/customerTransactions.utils";

export const CustomerTransactions = () => {
  const { customerId } = useParams();
  const {
    loadingCustomerDetails,
    customerDetails,
    getCustomerDetails,
    loadingCustomerTransactions,
    customerTransactions,
    getCustomerTransactions
  } = useCustomerDetails();

  const [rewardsPoint, setRewardsPoint] = useState(0);

  useEffect(() => {
    getCustomerDetails(customerId);
  }, [customerId, getCustomerDetails]);

  useEffect(() => {
    if (customerDetails) {
      getCustomerTransactions(customerDetails.id);
    }
  }, [customerDetails, getCustomerTransactions]);

  useEffect(() => {
    if (!loadingCustomerTransactions && customerTransactions) {
      setRewardsPoint(calculateRewardPointsForMultipleTransactions(customerTransactions.map(customerTransaction => customerTransaction.amount)));
    }
  }, [customerTransactions, loadingCustomerTransactions])

  return (
    <div className="container">
      <h4 className="text-center">Customer Details</h4>
      {(loadingCustomerDetails || loadingCustomerTransactions) && <Spinner />}
      {!loadingCustomerDetails && customerDetails && <CustomerDetails {...customerDetails} rewardsPoint={rewardsPoint} />}
      {!loadingCustomerTransactions && <CustomerTransactionsTable transactions={customerTransactions} />}
    </div>
  );
}

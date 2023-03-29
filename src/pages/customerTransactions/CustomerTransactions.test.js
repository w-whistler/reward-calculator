import { render, screen } from "@testing-library/react";
import { CustomerDetailsContext } from "../../context/customerDetails/CustomerDetailsContextController";
import { CustomerTransactions } from "./CustomerTransactions";

const getCustomerDetailsMock = jest.fn();
const getCustomerTransactionsMock = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ customerId: 'test-route-param' }),
}));

describe('CustomerTransactions', () => {
  it('render header', () => {
    render(
      <CustomerDetailsContext.Provider
        value={{
          loadingCustomerDetails: false,
          customerDetails: null,
          getCustomerDetails: getCustomerDetailsMock,
          loadingCustomerTransactions: false,
          customerTransactions: [],
          getCustomerTransactions: getCustomerTransactionsMock,
        }}
      >
        <CustomerTransactions />
      </CustomerDetailsContext.Provider>
    );

    expect(screen.getByRole('heading', { name: 'Customer Details' })).toBeInTheDocument();
    expect(getCustomerDetailsMock).toBeCalledWith('test-route-param');
  });

  it('render customer details loading', () => {
    render(
      <CustomerDetailsContext.Provider
        value={{
          loadingCustomerDetails: true,
          customerDetails: null,
          getCustomerDetails: jest.fn(),
          loadingCustomerTransactions: false,
          customerTransactions: [],
          getCustomerTransactions: jest.fn(),
        }}
      >
        <CustomerTransactions />
      </CustomerDetailsContext.Provider>
    );

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('render customer transactions loading', () => {
    render(
      <CustomerDetailsContext.Provider
        value={{
          loadingCustomerDetails: false,
          customerDetails: {
            id: 'test-customer-id'
          },
          getCustomerDetails: jest.fn(),
          loadingCustomerTransactions: true,
          customerTransactions: [],
          getCustomerTransactions: getCustomerTransactionsMock,
        }}
      >
        <CustomerTransactions />
      </CustomerDetailsContext.Provider>
    );

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(getCustomerTransactionsMock).toBeCalledWith('test-customer-id');
  });
});

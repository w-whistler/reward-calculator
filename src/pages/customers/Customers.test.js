import { fireEvent, render, screen } from "@testing-library/react";
import { CustomersContext } from "../../context/customers/CustomersContextController";
import { Customers } from "./Customers";
import { customersMock } from "./Customers.mocks";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}))

describe('Customers', () => {
  it('render header and empty table', () => {
    render(
      <CustomersContext.Provider value={{ loading: false, customers: [] }}>
        <Customers />
      </CustomersContext.Provider>
    );

    expect(screen.getByRole('heading', { name: 'Customers' })).toBeInTheDocument();
    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
    expect(screen.getByText('id')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();
  });

  it('renders loading spinner', () => {
    render(
      <CustomersContext.Provider value={{ loading: true, customers: [] }}>
        <Customers />
      </CustomersContext.Provider>
    );

    expect(screen.getByRole('heading', { name: 'Customers' })).toBeInTheDocument();
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.queryByText('id')).not.toBeInTheDocument();
    expect(screen.queryByText('name')).not.toBeInTheDocument();
  });

  it('renders customers table', () => {
    render(
      <CustomersContext.Provider value={{ loading: false, customers: customersMock }}>
        <Customers />
      </CustomersContext.Provider>
    );

    expect(screen.getByRole('heading', { name: 'Customers' })).toBeInTheDocument();
    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
    expect(screen.getByText('id')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();

    customersMock.forEach(customer => {
      expect(screen.getByText(customer.id)).toBeInTheDocument();
      expect(screen.getByText(customer.name)).toBeInTheDocument();
    });
  });

  it('navigate on click id', () => {
    render(
      <CustomersContext.Provider value={{ loading: false, customers: customersMock }}>
        <Customers />
      </CustomersContext.Provider>
    );

    const customerIdElement = screen.getByText(customersMock[0].id);
    expect(customerIdElement).toBeInTheDocument();

    fireEvent.click(customerIdElement);

    expect(mockUseNavigate).toBeCalledWith(`/${customersMock[0].id}`);
  });
});

import { render, screen } from "@testing-library/react";
import { CustomerDetails } from "./CustomerDetails";

describe('CustomerDetails', () => {
  it('render each fields', () => {
    const customerDetails = {
      id: '1234',
      name: 'John Doe',
      rewardsPoint: 4000,
    };

    render(<CustomerDetails {...customerDetails} />);

    expect(screen.getByText('ID:')).toBeInTheDocument();
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Reward Points:')).toBeInTheDocument();
    expect(screen.getByText(customerDetails.id)).toBeInTheDocument();
    expect(screen.getByText(customerDetails.name)).toBeInTheDocument();
    expect(screen.getByText(customerDetails.rewardsPoint)).toBeInTheDocument();
  });
  
  it('render default reward point', () => {
    const customerDetails = {
      id: '1234',
      name: 'John Doe',
    };

    render(<CustomerDetails {...customerDetails} />);

    expect(screen.getByText('ID:')).toBeInTheDocument();
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Reward Points:')).toBeInTheDocument();
    expect(screen.getByText(customerDetails.id)).toBeInTheDocument();
    expect(screen.getByText(customerDetails.name)).toBeInTheDocument();
    expect(screen.getByText(0)).toBeInTheDocument();
  });
});

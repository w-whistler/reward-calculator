import { render, screen } from "@testing-library/react";
import { CustomerTransactionsTable } from "./CustomerTransactionsTable";
import { transactionsMock } from "./CustomerTransactionsTable.mocks";

describe('CustomerTransactionsTable', () => {
  it('render table', () => {
    render(<CustomerTransactionsTable transactions={transactionsMock} />);

    expect(screen.getByText('id')).toBeInTheDocument();
    expect(screen.getByText('amount')).toBeInTheDocument();
    expect(screen.getByText('Created At')).toBeInTheDocument();

    transactionsMock.forEach(transaction => {
      expect(screen.getByText(transaction.id)).toBeInTheDocument();
      expect(screen.getByText(transaction.amount)).toBeInTheDocument();
      expect(screen.getByText(new Date(transaction.createdAt).toLocaleString())).toBeInTheDocument();
    });
  });
});

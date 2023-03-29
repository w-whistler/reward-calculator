import { Table } from "../../../../components"

export const CustomerTransactionsTable = ({ transactions }) => {
  const colDefs = [{
    name: 'id',
  }, {
    name: 'amount',
  }, {
    name: 'createdAt',
    title: 'Created At',
    renderer: (value) => new Date(value).toLocaleString(),
  }];

  return (
    <Table
      colDefs={colDefs}
      rows={transactions}
    />
  );
}

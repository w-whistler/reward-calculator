import { Model, Response, Server } from "miragejs";
import { MOCK_SERVER_BASE_URL } from "../constants";
import { customersMock } from "./mocks/customers";
import { transactionsMock } from "./mocks/transactions";

export const mockServer = () => {
  new Server({
    urlPrefix: MOCK_SERVER_BASE_URL,
    models: {
      me: Model,
    },
    routes() {
      this.get('/customers', () => {
        return {
          success: true,
          data: customersMock,
        };
      });

      this.get('/customers/:customerId', (_schema, request) => {
        const { customerId } = request.params;

        const customerDetails = customersMock.find(customer => customer.id === customerId);

        if (!customerDetails) {
          return new Response(404, { 'Content-Type': 'application/json' }, { success: false, error: { message: 'Customer not found' } });
        }

        return {
          success: true,
          data: customerDetails,
        };
      });

      this.get('/customers/:customerId/transactions', (_schema, request) => {
        const { customerId } = request.params;

        const customerTransactions = transactionsMock.filter(transaction => transaction.createdBy === customerId);

        return {
          success: true,
          data: customerTransactions,
        };
      });
      
      this.passthrough();
    }
  })
};

import { Routes, Route } from 'react-router-dom';
import { Customers } from './pages/customers';
import { CustomerTransactions } from './pages/customerTransactions';
import { NotFound } from './pages/notFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Customers />} />
      <Route path="/:customerId" element={<CustomerTransactions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

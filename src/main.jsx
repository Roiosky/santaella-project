import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx'; // Importa el nuevo Dashboard

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<CategoryForm />} />
        <Route path="/register" element={<CategoryList />} />
        <Route path="/register" element={<ProductDetail />} />
        <Route path="/register" element={<ProductForm />} />
        <Route path="/register" element={<ProductList />} />
        <Route path="/register" element={<SalesReport />} />
        <Route path="/register" element={<StockReport />} />
        <Route path="/register" element={<StockForm />} />
        <Route path="/register" element={<StockList />} />
        <Route path="/register" element={<TransactionDetail />} />
        <Route path="/register" element={<TransactionList />} />
        <Route path="/register" element={<RoleManagement />} />
        <Route path="/register" element={<UserList />} />
      </Routes>
    </Router>
  </StrictMode>
);

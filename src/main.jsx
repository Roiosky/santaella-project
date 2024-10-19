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
        <Route path="/CategoryForm" element={<CategoryForm />} />
        <Route path="/CategoryList" element={<CategoryList />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/ProductForm" element={<ProductForm />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/SalesReport" element={<SalesReport />} />
        <Route path="/StockReport" element={<StockReport />} />
        <Route path="/StockForm" element={<StockForm />} />
        <Route path="/StockList" element={<StockList />} />
        <Route path="/TransactionDetail" element={<TransactionDetail />} />
        <Route path="/TransactionList" element={<TransactionList />} />
        <Route path="/RoleManagement" element={<RoleManagement />} />
        <Route path="/UserList" element={<UserList />} />
      </Routes>
    </Router>
  </StrictMode>
);

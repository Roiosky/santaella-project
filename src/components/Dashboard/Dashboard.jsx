import '../../Styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="summary-cards">
        <div className="card">Total Products</div>
        <div className="card">Low Stock Products</div>
        <div className="card">Total Sales</div>
      </div>
    </div>
  );
};

export default Dashboard;

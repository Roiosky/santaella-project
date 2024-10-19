import '../../Styles/Transactions.css';

const TransactionDetail = () => {
  return (
    <div className="transaction-detail-container">
      <h2>Transaction Details</h2>
      <p><strong>Product:</strong> Product 1</p>
      <p><strong>Type:</strong> Sale</p>
      <p><strong>Quantity:</strong> 5 units</p>
      <p><strong>Date:</strong> 2023-09-15</p>
    </div>
  );
};

export default TransactionDetail;

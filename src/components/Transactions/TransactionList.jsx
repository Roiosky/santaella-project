import '../../Styles/Transactions.css';

const TransactionList = () => {
  return (
    <div className="transaction-list-container">
      <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>Sale</td>
            <td>5</td>
            <td>2023-09-15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;

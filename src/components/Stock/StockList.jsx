import '../../Styles/Stock.css';

const StockList = () => {
  return (
    <div className="stock-list-container">
      <h2>Stock Movements</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Movement Type</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>Added</td>
            <td>50</td>
            <td>2023-09-15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StockList;

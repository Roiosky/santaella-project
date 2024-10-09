import './Stock.css';

const StockForm = () => {
  return (
    <div className="stock-form-container">
      <form>
        <h2>Record Stock Movement</h2>
        <input type="text" placeholder="Product Name" />
        <input type="number" placeholder="Quantity" />
        <select>
          <option value="add">Add to Stock</option>
          <option value="remove">Remove from Stock</option>
        </select>
        <button type="submit">Record Movement</button>
      </form>
    </div>
  );
};

export default StockForm;

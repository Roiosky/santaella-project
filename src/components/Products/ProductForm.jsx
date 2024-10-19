import '../../Styles/Products.css';

const ProductForm = () => {
  return (
    <div className="product-form-container">
      <form>
        <h2>Add Product</h2>
        <input type="text" placeholder="Product Name" />
        <input type="text" placeholder="Category" />
        <input type="number" placeholder="Stock" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;

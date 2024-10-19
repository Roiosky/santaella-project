import '../../Styles/Categories.css';

const CategoryForm = () => {
  return (
    <div className="category-form-container">
      <form>
        <h2>Add Category</h2>
        <input type="text" placeholder="Category Name" />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default CategoryForm;

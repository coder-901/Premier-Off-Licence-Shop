import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="all" name="price" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="0-10"
        title="$0 - $10"
        name="price"
      />

      <Input
        handleChange={handleChange}
        value="10-20"
        title="$10 - $20"
        name="price"
      />

      <Input
        handleChange={handleChange}
        value="20-30"
        title="$20 - $30"
        name="price"
      />

      <Input
        handleChange={handleChange}
        value="30+"
        title="Over $30"
        name="price"
      />
    </div>
  );
};

export default Price;
import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={5}
          title="$0 - $5"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={10}
          title="$5 - $10"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={15}
          title="$10 - $15"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={20}
          title="Over $15"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
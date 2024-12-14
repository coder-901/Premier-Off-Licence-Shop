import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Founding Spirits" title="Founding Spirits" />
          <Button onClickHandler={handleClick} value="amazon" title="Amazon" />
          <Button onClickHandler={handleClick} value="Beers of Europe" title="Beers of Europe" />
          <Button onClickHandler={handleClick} value="Still Spirits" title="Still Spirits" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
import { ChangeEvent, useState } from "react";
import { GrocerySingleItemProps } from "./interfaces";

const GrocerySingleItem: React.FC<GrocerySingleItemProps> = ({
  good,
  handleDeleteItem,
  handleUpdateGood,
}) => {
  const [isChecked, setIsChecked] = useState(good.isChecked);

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prev) => !prev);
    handleUpdateGood({ ...good, isChecked: e.target.checked });
    
  };

  return (
    <li className="single-item">
      <input
        type="checkbox"
        name="check"
        id={good.id}
        checked={isChecked}
        onChange={handleChangeCheckbox}
      />
      <p>{good.name}</p>
      <button
        className="btn remove-btn"
        onClick={() => handleDeleteItem(good.id, good.name)}
      >
        Delete
      </button>
    </li>
  );
};

export default GrocerySingleItem;

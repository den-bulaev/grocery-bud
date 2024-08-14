import { ChangeEvent, FormEvent, useState } from "react";

import { v4 as uuid } from "uuid";

import { IGood } from "../../interfaces";
import { IGroceryFormProps } from "./interfaces";

const GroceryForm: React.FC<IGroceryFormProps> = ({ addGood }) => {
  const [goodName, setGoodName] = useState("");

  const handleChangeGood = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setGoodName(val);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newGood: IGood = {
      id: uuid(),
      name: goodName,
      isChecked: false,
    };

    addGood(newGood);

    setGoodName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          name="good"
          id="good"
          value={goodName}
          onChange={handleChangeGood}
        />
        <button className="btn" type="submit">
          Add item
        </button>
      </div>
    </form>
  );
};

export default GroceryForm;

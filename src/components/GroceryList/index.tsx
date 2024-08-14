import GrocerySingleItem from "../GrocerySingleItem";
import { IGroceryListProps } from "./interfaces";

const GroceryList: React.FC<IGroceryListProps> = ({
  goods,
  handleDeleteItem,
  handleUpdateGood,
}) => {
  return (
    <ul className="items">
      {goods.map((good) => {
        return (
          <GrocerySingleItem
            good={good}
            key={good.id}
            handleDeleteItem={handleDeleteItem}
            handleUpdateGood={handleUpdateGood}
          />
        );
      })}
    </ul>
  );
};

export default GroceryList;

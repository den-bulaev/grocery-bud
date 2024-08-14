import { IGood } from "../../interfaces";

export interface GrocerySingleItemProps {
  good: IGood;
  handleDeleteItem: (id: string, itemName: string) => void;
  handleUpdateGood: (good: IGood) => void;
}

import { IGood } from "../../interfaces";

export interface IGroceryListProps {
  goods: IGood[];
  handleDeleteItem: (id: string, itemName: string) => void;
  handleUpdateGood: (good: IGood) => void;
}

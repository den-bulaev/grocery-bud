export interface IGood {
  id: string;
  name: string;
  isChecked: boolean;
}

export enum ELocalStorageKeys {
  GROCERY_ITEMS = "groceryItems",
};

export interface GalacticRegistry<T> {
  addNewItem(item: T): void;
  removeItem(item: T): void;
  getItem(index: number): T;
  getItems(): T[];
  getNumberOfItems(): number;
}
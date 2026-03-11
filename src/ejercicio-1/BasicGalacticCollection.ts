import { GalacticRegistry } from "./GalacticRegistry.js";

export abstract class BasicGalacticCollection<T extends {name: string}> implements GalacticRegistry<T> {
  protected items: T[] = [];

  addNewItem(item: T): void {
    this.items.push(item);
  }

  removeItem(item: T): void {
    this.items = this.items.filter(it => it !== item);
  }

  getItem(index: number): T {
    return this.items[index];
  }

  getItems(): T[] {
    return this.items;
  }

  getNumberOfItems(): number {
    return this.items.length;
  }

  searchByName(name: string): T[] {
    return this.items.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
  }
}
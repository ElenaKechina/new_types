import IMovie from './iMovie';

interface ICart {
  add(item: IMovie): void;
  items: IMovie[];
}

export default class Cart implements ICart {
  private _items: IMovie[] = [];

  add(item: IMovie): void {
    this._items.push(item);
  }

  get items(): IMovie[] {
    return [...this._items];
  }
}

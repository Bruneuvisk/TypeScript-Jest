import { CartItem } from "../../srp/entities/interfaces/car-item";

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}

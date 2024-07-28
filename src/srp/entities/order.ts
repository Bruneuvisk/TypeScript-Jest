import { OrderStatus } from "../../srp/entities/interfaces/order-status";
import { Messaging } from "../../srp/services/messaging";
import { Persistency } from "../../srp/services/persistency";
import { ShoppingCart } from "../../srp/entities/shopping-cart";

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if(this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio')
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seu pedido com um total de ${this.cart.total()} foi recebido.`)
    this.persistency.saveOrder();
    this.cart.clear();
  };
}

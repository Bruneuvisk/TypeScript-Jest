import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { FifityPercentDiscount, NoDiscount, TenPercentDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";


//const fiftyPercentDiscount = new FifityPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount()
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Bruno', 'Henrique', '000.000.000-00');
const enterpriseCustomer = new EnterpriseCustomer('Bruno', '111.111.111-1111/0001')
const order = new Order(shoppingCart, messaging, persistency, individualCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9 ));
shoppingCart.addItem(new Product('Lápis', 1.59 ));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout()

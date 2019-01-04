import { Product } from './product.model';

class CartItem {
    constructor(
        public product: Product,
        public quantity: number = 1,
    ) {}


  value() {
    return this.product.price * this.quantity;
  }
}

export { CartItem };

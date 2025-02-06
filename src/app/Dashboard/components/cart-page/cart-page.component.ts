import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

  cartItems!: Product[];
  count:number = 1;
  total: number = 4000;
  addedProduct!: Product;


  ngOnInit(): void{
    this.addedProduct = history.state.data;
    console.log('addedProduct', this.addedProduct);

    // this.cartItems.push(this.addedProduct);
  }

  removeFromCart(){
    this.count--;
  }

  addToCart(){
    this.count++;
  }

  deleteItem(item: number) {
    this.cartItems.splice(item, 1);
  }
}

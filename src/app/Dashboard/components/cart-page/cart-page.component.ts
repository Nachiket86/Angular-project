import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

export interface ProductWithQuantity extends Product{
  quantity: number;
}

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

  cartItems!: ProductWithQuantity[];
  count:number = 1;
  total: number = 4000;
  addedProduct!: Product;
  selectedSize!: string;


  ngOnInit(): void{
    this.addedProduct = history.state.data;
    this.selectedSize = history.state.size;
    console.log('addedProduct', this.addedProduct);

    // this.cartItems.push(this.addedProduct);
  }

  removeFromCart(){
    if(this.count == 1) return;
    this.count--;
  }

  addToCart(){
    this.count++;
  }

  deleteItem(item: number) {
    this.cartItems.splice(item, 1);
  }
}

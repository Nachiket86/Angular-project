import { Component, inject } from '@angular/core';
import { Product } from '../../Dashboard/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  currentProduct!: Product;
  productID!: number;

  route: Router = inject(Router);
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentProduct = history.state.data;
    console.log('current Product>>>', this.currentProduct);

    this.productID = +this.activeRoute.snapshot.paramMap.get('id')!;
    console.log('id', this.productID);
  }

  isClicked = false;

  addToCart(addedProduct: Product): void {
    this.isClicked = true;
    // this.route.navigate(['/cart'],{
    //   state: {
    //     data: addedProduct
    //   }
    // });

    const NavigationExtras = {
      state: {
        data: addedProduct,
      },
    };
    this.route.navigate(['/products/cart'], NavigationExtras);
  }
}

import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  currentProduct!: Product;
  productID!: number;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentProduct = history.state.data;
    console.log('currentCourse>>>', this.currentProduct);

    this.productID = +this.activeRoute.snapshot.paramMap.get('id')!;
    console.log('id',this.productID);

    // this.courseSelected = this.products.find(course => {
    //   course.id == this.courseID;
    //   console.log('courseSelected', this.courseSelected);
    // })
  }

  addToCart(): void {
    console.log('Add to cart functionality to be implemented');
  }
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit,OnDestroy {

  @Input() searchText!: string;
  products!: Product[];
  productID!: number;
  productSelected?: Product;

  constructor(private productsService: ProductsService,
    private router:Router,
  ) {}
 

  ngOnInit(): void {
    localStorage.setItem('searchText', 'searchText');
    sessionStorage.setItem('searchText', 'searchText');
    document.cookie = 'name = searchText';

    this.getProducts();


    console.log('search Text', this.searchText);
 

    // this.getDiscountedPrice();
    // this.getDiscountedPercent();
    
    // this.getFilteredPrice();
    // this.findProductName();
  }

  getProducts() {
    this.productsService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
        console.log('products', products);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }

  // returns the new array which only contains the items specified in the callback function
  getDiscountedPrice() {
    const discountedPrice = this.products.map(
      (product) => product.discountedPrice
    );
    console.log('discounted price', discountedPrice);
    return discountedPrice;
  }

  getDiscountedPercent() {
    this.products.forEach((items) => {
      const discountPercent =
        ((items.price - items.discountedPrice!) / items.price) * 100;
        
      return discountPercent;
    });
  }

  getFilteredPrice() {
    // filters an array according to the condition and returns new array containing filtered items
    const filterPrice = this.products.filter((priceValue) => {
      return priceValue.price <= 2000;
    });
    console.log('Filtered price = ', filterPrice);
  }

  findProductName() {
    // Find method returns the first element of an array where the callback specified is true
    const findName = this.products.find((productName) => {
      return productName.name === 'Shirt';
    });
    console.log('Names: ', findName);
    // will return only the first element which has name shirt even if rest has name = shirt
  }

  navigateToProduct(id: number){
    const currentId = id;
    this.productSelected = this.products.find(product => {
      return product.id == currentId;
    })
    console.log('courseSelected', this.productSelected);
    this.router.navigate(['/products/product/' + id],{
      state: {
        data: this.productSelected,
      }
    });
  }

  ngOnDestroy(): void {
    
  }
}

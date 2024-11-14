import { Component } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {

  searchText!: string;
  
  getSearchText(searchText:string){
    this.searchText = searchText;
    console.log('Search text changed: ', this.searchText);
  }

}

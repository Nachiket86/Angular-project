import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchText!: string;
  @Output() searchContent: EventEmitter<string> = new EventEmitter<string>();

  
  sendSearchEvent(): void {
    this.searchContent.emit(this.searchText);
  }
}

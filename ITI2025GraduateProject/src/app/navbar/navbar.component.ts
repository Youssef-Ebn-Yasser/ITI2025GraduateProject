import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchValue: string = '';

  onSearch() {
    console.log('Search for', this.searchValue);
    alert(`you searched for ${this.searchValue}`);
  }
}
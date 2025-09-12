import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailsComponent } from "./components/details/details.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { CartComponent } from "./pages/cart/cart.component";
import { CategoryComponent } from "./pages/category/category.component";

@Component({
  selector: 'app-root',
  imports: [DetailsComponent, NavbarComponent, HomeComponent, CartComponent, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code';
}

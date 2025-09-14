import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FooterBannerComponent } from "../../components/footer-banner/footer-banner.component";
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { HeroBanerComponent } from "../../components/hero-baner/hero-baner.component";
import { TextHeaderComponent } from "../../components/text-header/text-header.component";
import { CustomButtonComponent } from "../../components/custom-button/custom-button.component";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/iproduct';
import { CommentBoxComponent } from "../../components/comment-box/comment-box.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, NavbarComponent, FooterComponent, FooterBannerComponent, HeroSectionComponent, HeroBanerComponent, TextHeaderComponent, CustomButtonComponent, ProductCardComponent, CommentBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  topSellingProducts!:Iproduct[];
  newArrivalProducts!:Iproduct[];
  productService:ProductService;
  boxs :number[] = [1,2,3,4,5];

  constructor(productService:ProductService){
    this.productService = productService;
  }
  ngOnInit(): void {
    this.topSellingProducts = this.productService.topSellingArrivals();
    this.newArrivalProducts = this.productService.getNewArrivals();
  }

    handleAddToCart(productId: number) {
    console.log('Product added:', productId);

    // Save product id to localStorage
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (!cart.includes(productId)) {
      cart.push(productId);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
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

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor, HeaderComponent, NavbarComponent, FooterComponent, FooterBannerComponent, HeroSectionComponent, HeroBanerComponent, TextHeaderComponent, CustomButtonComponent, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

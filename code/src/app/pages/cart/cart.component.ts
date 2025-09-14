import { Component, OnInit } from '@angular/core';
import { enSize, Iproduct } from '../../models/iproduct';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  enSize = enSize;
  cartIds: number[] = [];
  productsCart: Iproduct[] = [];
  productService: ProductService;

  subTotal: number = 0;
  discount: number = 0;
  deliveryFee: number = 0;
  total: number = 0;

  constructor(productService: ProductService) {
    this.productService = productService;

  }

  ngOnInit() {
    this.cartIds = JSON.parse(localStorage.getItem('cart') || '[]');

    for (let id of this.cartIds) {
      let product = this.productService.getProductById(id);
      console.log(product);
      this.productsCart.push(product);
      this.subTotal += product.price;
    }
    console.log(this.subTotal);

    console.log(this.productsCart);
    console.log('Loaded cart IDs:', this.cartIds);

    this.deliveryFee = this.subTotal * (this.discount / 100);
    this.total = this.subTotal - this.discount;
  }

  applayDiscount(val: any) {


    if (!this.validateInput(+val))
      return;

    this.discount = +val;

    this.deliveryFee = this.subTotal * (this.discount / 100);
    this.total = this.subTotal - this.deliveryFee;

    this.clearInput();
  }

  minusProductCount(product:Iproduct) {
    console.log('minusProductCount');

    if (product.payNumber == 1)
      return;

    this.subTotal-=product.price;
    this.total = this.subTotal - this.deliveryFee;

    product.payNumber-=1;
  }

  plusProductCount(product:Iproduct) {

    console.log('plusProductCount');
    if (product.payNumber == 10) {

      alert("can not add more than 10");
      return;
    }

    this.subTotal+=product.price;
    this.total = this.subTotal - this.deliveryFee;

    product.payNumber+=1;
  }


  private validateInput(val: number): boolean {

    if (val < 0 || val > 100) {
      this.clearInput();

      alert("error enter valid discount");

      return false;
    }

    return true
  }

  private clearInput() {
    let textVal = document.getElementById("discountInput") as HTMLInputElement;
    textVal.value = '';
  }


}

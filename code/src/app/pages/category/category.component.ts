import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Icategory } from '../../models/icategory';
import { enDressStyle, enSize, Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [FormsModule, NgClass, NgFor],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  categoryService: CategoryService;
  productServcic: ProductService;

  lowPrice!: number;
  highPrice!: number;
  ourCategories: Icategory[];
  enSize = enSize;
  sizes = Object.keys(enSize)
    .filter(k => isNaN(Number(k)))
    .map(k => ({
      key: k,
      value: enSize[k as keyof typeof enSize]
    }));
  enstyle = enDressStyle;
  styles = Object.keys(enDressStyle)
    .filter(k => isNaN(Number(k)))
    .map(k => ({
      key: k,
      value: enDressStyle[k as keyof typeof enDressStyle]
    }));

  colors = [
    { name: 'Red', value: '#dc3545' },
    { name: 'Blue', value: '#0d6efd' },
    { name: 'Green', value: '#198754' },
    { name: 'Purple', value: '#e207ffff' },
    { name: 'Gray', value: '#6c757d' },
    { name: 'White', value: '#ffffff' },
    { name: 'Black', value: '#000000' },
  ];

  selectedColor: string = '#ffffff';

  products!: Iproduct[];
  numberOfTotalProducts: number = 0;
  selectedCategoryId: number = 0;
  selectedStyleId: number = 0;
  selectedSize: enSize | null = null;
  selectedPrice: number = this.lowPrice;
  constructor(categoryService: CategoryService, productServcic: ProductService) {

    this.categoryService = categoryService;
    this.productServcic = productServcic;
    this.ourCategories = categoryService.getCategories();

  }


  ngOnInit(): void {
    let lowheighPrice = this.productServcic.lowHighPrice();

    this.lowPrice = lowheighPrice.lowestPrice;
    this.highPrice = lowheighPrice.heightestPrice;


    let result = this.productServcic.getPaginated(1);
    this.products = result.products;
    this.numberOfTotalProducts = result.numberOfProducts;
    console.log(this.products)


    /**     for test paginated */
    // let page1 = this.productServcic.getPaginated(1,1,false);
    // console.log('page 1');
    // console.log(page1);

    // let page2 = this.productServcic.getPaginated(2);
    // console.log('page 2');
    // console.log(page2);

    // let page3 = this.productServcic.getPaginated(3);
    // console.log('page 3');
    // console.log(page3);

    // let page4= this.productServcic.getPaginated(4);
    // console.log('page 4');
    // console.log(page4);

    // let page5 = this.productServcic.getPaginated(5);
    // console.log('page 5');
    // console.log(page5);

    // let page6= this.productServcic.getPaginated(6);
    // console.log('page 6');
    // console.log(page6);
  }

  sortByLowPrice() {
    let result = this.productServcic.getPaginated(1);
    this.products = result.products;
  }

  sortByhieghPrice() {
    let result = this.productServcic.getPaginated(1, 1, false);
    this.products = result.products;
  }

  sortByLowDiscount() {
    let result = this.productServcic.getPaginated(1, 2);
    this.products = result.products;
  }

  applayFilter() {
    console.log("Selected Category:", this.selectedCategoryId);
    console.log("Selected style:", this.selectedStyleId);
    console.log("Selected size:", this.selectedSize);
    console.log("Selected price:", this.selectedPrice);
    console.log("Selected color:", this.selectedColor);

    let result = this.productServcic.applayFilter(this.selectedCategoryId, this.selectedStyleId,
      this.selectedSize, this.selectedPrice, this.selectedColor);

      console.log(result)
    this.products = result;
  }

  selectSize(size: enSize) {
    this.selectedSize = size;
  }
}

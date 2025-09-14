import { Injectable } from '@angular/core';
import { enDressStyle, enSize, Iproduct } from '../models/iproduct';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products!: Iproduct[];

  constructor() {

      // ===== T-Shirts =====t
  this.products = [
  { id: 1, catId: 1, name: 'Classic White T-Shirt', description: 'Soft cotton T-shirt for daily wear.', discount: 10, avaliableColor: ['White','Black'], size: enSize.medium, imagePath: ['assets/images/products/p01.png'], rate: 4.5, price: 25, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 2, catId: 1, name: 'Graphic Tee', description: 'Trendy printed T-shirt with vibrant colors.', discount: 15, avaliableColor: ['Red','Blue'], size: enSize.large, imagePath: ['assets/images/products/p02.png'], rate: 4.2, price: 30, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 3, catId: 1, name: 'V-Neck T-Shirt', description: 'Lightweight V-neck T-shirt.', discount: 5, avaliableColor: ['Black','Gray'], size: enSize.small, imagePath: ['assets/images/products/p03.png'], rate: 4.0, price: 22, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 4, catId: 1, name: 'Sporty Dry-Fit Tee', description: 'Moisture-wicking T-shirt.', discount: 20, avaliableColor: ['Green','Gray'], size: enSize.xLarge, imagePath: ['assets/images/products/p04.png'], rate: 4.7, price: 35, payNumber:1, dressStyle: enDressStyle.gym },
  { id: 5, catId: 1, name: 'Oversized Streetwear Tee', description: 'Trendy oversized T-shirt.', discount: 0, avaliableColor: ['Black','Beige'], size: enSize.large, imagePath: ['assets/images/products/p05.png'], rate: 4.3, price: 40, payNumber:1, dressStyle: enDressStyle.casual },

  // ===== Shorts =====
  { id: 6, catId: 2, name: 'Denim Shorts', description: 'Classic blue denim shorts.', discount: 10, avaliableColor: ['Blue','Black'], size: enSize.medium, imagePath: ['assets/images/products/p06.png'], rate: 4.4, price: 28, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 7, catId: 2, name: 'Running Shorts', description: 'Lightweight shorts for running.', discount: 15, avaliableColor: ['Gray','Navy'], size: enSize.large, imagePath: ['assets/images/products/p07.png'], rate: 4.6, price: 32, payNumber:1, dressStyle: enDressStyle.gym },
  { id: 8, catId: 2, name: 'Cargo Shorts', description: 'Multi-pocket cargo shorts.', discount: 5, avaliableColor: ['Khaki','Olive'], size: enSize.small, imagePath: ['assets/images/products/p08.png'], rate: 4.1, price: 35, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 9, catId: 2, name: 'Beach Shorts', description: 'Colorful beach shorts.', discount: 20, avaliableColor: ['Red','Yellow','Blue'], size: enSize.medium, imagePath: ['assets/images/products/P09-1.png'], rate: 4.3, price: 27, payNumber:1, dressStyle: enDressStyle.party },
  { id: 10, catId: 2, name: 'Formal Chino Shorts', description: 'Smart chino shorts.', discount: 0, avaliableColor: ['Black','White'], size: enSize.large, imagePath: ['assets/images/products/p13.png'], rate: 4.0, price: 45, payNumber:1, dressStyle: enDressStyle.formal },

  // ===== Hoodie =====
  { id: 11, catId: 3, name: 'Pullover Hoodie', description: 'Warm fleece hoodie.', discount: 10, avaliableColor: ['Gray','Navy'], size: enSize.medium, imagePath: ['assets/images/products/p15.png'], rate: 4.8, price: 55, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 12, catId: 3, name: 'Zip-Up Hoodie', description: 'Lightweight zip hoodie.', discount: 5, avaliableColor: ['Black','White'], size: enSize.large, imagePath: ['assets/images/products/p17.png'], rate: 4.5, price: 50, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 13, catId: 3, name: 'Sport Hoodie', description: 'Stretch-fit training hoodie.', discount: 20, avaliableColor: ['Blue','Green'], size: enSize.small, imagePath: ['assets/images/products/p13.png'], rate: 4.6, price: 65, payNumber:1, dressStyle: enDressStyle.gym },
  { id: 14, catId: 3, name: 'Oversized Hoodie', description: 'Relaxed-fit oversized hoodie.', discount: 0, avaliableColor: ['Beige','Brown'], size: enSize.xLarge, imagePath: ['assets/images/products/p14.png'], rate: 4.2, price: 60, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 15, catId: 3, name: 'Party Hoodie', description: 'Stylish hoodie with prints.', discount: 15, avaliableColor: ['Red','Purple'], size: enSize.medium, imagePath: ['assets/images/products/p15.png'], rate: 4.3, price: 70, payNumber:1, dressStyle: enDressStyle.party },

  // ===== Jeans =====
  { id: 16, catId: 4, name: 'Slim Fit Jeans', description: 'Classic slim fit jeans.', discount: 5, avaliableColor: ['Blue','Black'], size: enSize.medium, imagePath: ['assets/images/products/p16.png'], rate: 4.4, price: 60, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 17, catId: 4, name: 'Regular Fit Jeans', description: 'Comfortable regular fit jeans.', discount: 0, avaliableColor: ['Dark Blue','Gray'], size: enSize.large, imagePath: ['assets/images/products/p17.png'], rate: 4.2, price: 55, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 18, catId: 4, name: 'Ripped Jeans', description: 'Trendy ripped jeans.', discount: 10, avaliableColor: ['Light Blue','Black'], size: enSize.small, imagePath: ['assets/images/products/p18.png'], rate: 4.5, price: 65, payNumber:1, dressStyle: enDressStyle.party },
  { id: 19, catId: 4, name: 'Bootcut Jeans', description: 'Classic bootcut jeans.', discount: 20, avaliableColor: ['Blue'], size: enSize.xLarge, imagePath: ['assets/images/products/p19.png'], rate: 4.1, price: 70, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 20, catId: 4, name: 'Formal Black Jeans', description: 'Sleek black jeans.', discount: 0, avaliableColor: ['Black'], size: enSize.medium, imagePath: ['assets/images/products/p14.png'], rate: 4.0, price: 80, payNumber:1, dressStyle: enDressStyle.formal },
    { id: 21, catId: 1, name: 'Summer Graphic Tee', description: 'Bright summer T-shirt.', discount: 10, avaliableColor: ['Yellow','Red'], size: enSize.small, imagePath: ['assets/images/products/p15.png'], rate: 4.3, price: 27, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 22, catId: 1, name: 'Eco Cotton Tee', description: 'Eco-friendly cotton.', discount: 5, avaliableColor: ['Green','White'], size: enSize.medium, imagePath: ['assets/images/products/p16.png'], rate: 4.1, price: 32, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 23, catId: 1, name: 'Retro Print Tee', description: 'Vintage style.', discount: 15, avaliableColor: ['Blue','Purple'], size: enSize.large, imagePath: ['assets/images/products/p17.png'], rate: 4.4, price: 35, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 24, catId: 2, name: 'Beach Party Shorts', description: 'Bright and comfy.', discount: 20, avaliableColor: ['Red','Blue'], size: enSize.medium, imagePath: ['assets/images/products/p18.png'], rate: 4.5, price: 30, payNumber:1, dressStyle: enDressStyle.party },
  { id: 25, catId: 2, name: 'Khaki Cargo Shorts', description: 'Casual cargo style.', discount: 5, avaliableColor: ['Khaki','Olive'], size: enSize.large, imagePath: ['assets/images/products/p19.png'], rate: 4.2, price: 33, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 26, catId: 2, name: 'Sport Shorts', description: 'Breathable for workouts.', discount: 10, avaliableColor: ['Gray','Navy'], size: enSize.medium, imagePath: ['assets/images/products/p01.png'], rate: 4.3, price: 28, payNumber:1, dressStyle: enDressStyle.gym },
  { id: 27, catId: 3, name: 'Hoodie with Zipper', description: 'Stylish zip hoodie.', discount: 15, avaliableColor: ['Black','Gray'], size: enSize.large, imagePath: ['assets/images/products/p02.png'], rate: 4.4, price: 55, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 28, catId: 3, name: 'Training Hoodie', description: 'Gym hoodie.', discount: 20, avaliableColor: ['Blue','Green'], size: enSize.medium, imagePath: ['assets/images/products/p03.png'], rate: 4.6, price: 60, payNumber:1, dressStyle: enDressStyle.gym },
  { id: 29, catId: 3, name: 'Party Oversized Hoodie', description: 'Trendy party hoodie.', discount: 0, avaliableColor: ['Red','Purple'], size: enSize.xLarge, imagePath: ['assets/images/products/p04.png'], rate: 4.5, price: 70, payNumber:1, dressStyle: enDressStyle.party },
  { id: 30, catId: 4, name: 'Classic Blue Jeans', description: 'Comfortable blue jeans.', discount: 5, avaliableColor: ['Blue'], size: enSize.medium, imagePath: ['assets/images/products/p05.png'], rate: 4.2, price: 60, payNumber:1, dressStyle: enDressStyle.casual },

  { id: 31, catId: 4, name: 'Dark Denim Jeans', description: 'Dark wash jeans.', discount: 10, avaliableColor: ['Dark Blue'], size: enSize.large, imagePath: ['assets/images/products/p06.png'], rate: 4.3, price: 65, payNumber:1, dressStyle: enDressStyle.formal },
  { id: 32, catId: 1, name: 'Lightweight Summer Tee', description: 'Cool cotton tee.', discount: 0, avaliableColor: ['White','Yellow'], size: enSize.small, imagePath: ['assets/images/products/p07.png'], rate: 4.1, price: 25, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 33, catId: 1, name: 'Gym Workout Tee', description: 'Performance T-shirt.', discount: 15, avaliableColor: ['Green','Blue'], size: enSize.medium, imagePath: ['assets/images/products/p08.png'], rate: 4.5, price: 30, payNumber:1, dressStyle: enDressStyle.gym },
  { id: 34, catId: 2, name: 'Formal Shorts', description: 'Chino style shorts.', discount: 0, avaliableColor: ['Black','Beige'], size: enSize.large, imagePath: ['assets/images/products/P09-2.png'], rate: 4.2, price: 45, payNumber:1, dressStyle: enDressStyle.formal },
  { id: 35, catId: 2, name: 'Summer Running Shorts', description: 'Light and comfy.', discount: 10, avaliableColor: ['Gray','Blue'], size: enSize.medium, imagePath: ['assets/images/products/p01.png'], rate: 4.3, price: 28, payNumber:1, dressStyle: enDressStyle.gym },
  { id: 36, catId: 3, name: 'Light Hoodie', description: 'Lightweight hoodie.', discount: 5, avaliableColor: ['Beige','White'], size: enSize.medium, imagePath: ['assets/images/products/p01.png'], rate: 4.4, price: 50, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 37, catId: 3, name: 'Street Party Hoodie', description: 'Streetwear party hoodie.', discount: 15, avaliableColor: ['Red','Black'], size: enSize.large, imagePath: ['assets/images/products/p02.png'], rate: 4.6, price: 65, payNumber:1, dressStyle: enDressStyle.party },
  { id: 38, catId: 4, name: 'Ripped Skinny Jeans', description: 'Fashionable ripped jeans.', discount: 20, avaliableColor: ['Blue','Black'], size: enSize.small, imagePath: ['assets/images/products/p07.png'], rate: 4.3, price: 68, payNumber:1, dressStyle: enDressStyle.party },
  { id: 39, catId: 4, name: 'Bootcut Dark Jeans', description: 'Classic bootcut.', discount: 0, avaliableColor: ['Dark Blue'], size: enSize.large, imagePath: ['assets/images/products/p07.png'], rate: 4.1, price: 70, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 40, catId: 1, name: 'Retro Casual Tee', description: 'Vintage casual tee.', discount: 5, avaliableColor: ['Red','Yellow'], size: enSize.medium, imagePath: ['assets/images/products/p06.png'], rate: 4.2, price: 30, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 41, catId: 1, name: 'Long Sleeve Tee', description: 'Comfortable long sleeve.', discount: 10, avaliableColor: ['White','Gray'], size: enSize.large, imagePath: ['assets/images/products/p05.png'], rate: 4.3, price: 32, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 42, catId: 2, name: 'Cargo Casual Shorts', description: 'Casual cargo shorts.', discount: 0, avaliableColor: ['Khaki','Green'], size: enSize.medium, imagePath: ['assets/images/products/p03.png'], rate: 4.2, price: 35, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 43, catId: 2, name: 'Gym Shorts', description: 'Workout shorts.', discount: 15, avaliableColor: ['Gray','Black'], size: enSize.large, imagePath: ['assets/images/products/p19.png'], rate: 4.4, price: 32, payNumber:1, dressStyle: enDressStyle.gym },
  { id: 44, catId: 3, name: 'Oversized Gym Hoodie', description: 'Oversized gym hoodie.', discount: 20, avaliableColor: ['Blue','Gray'], size: enSize.xLarge, imagePath: ['assets/images/products/p19.png'], rate: 4.5, price: 70, payNumber:1, dressStyle: enDressStyle.gym },
  { id: 45, catId: 3, name: 'Light Party Hoodie', description: 'Party hoodie.', discount: 5, avaliableColor: ['Red','Purple'], size: enSize.medium, imagePath: ['assets/images/products/p18.png'], rate: 4.3, price: 60, payNumber:1, dressStyle: enDressStyle.party },
  { id: 46, catId: 4, name: 'Classic Dark Jeans', description: 'Dark classic jeans.', discount: 0, avaliableColor: ['Black','Blue'], size: enSize.large, imagePath: ['assets/images/products/p17.png'], rate: 4.2, price: 75, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 47, catId: 4, name: 'Light Blue Jeans', description: 'Comfortable light jeans.', discount: 10, avaliableColor: ['Light Blue'], size: enSize.medium, imagePath: ['assets/images/products/p16.png'], rate: 4.3, price: 65, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 48, catId: 1, name: 'Eco Summer Tee', description: 'Eco cotton summer tee.', discount: 5, avaliableColor: ['Green','White'], size: enSize.medium, imagePath: ['assets/images/products/p15.png'], rate: 4.2, price: 28, payNumber:1, dressStyle: enDressStyle.casual },
  { id: 49, catId: 2, name: 'Beach Casual Shorts', description: 'Summer beach shorts.', discount: 15, avaliableColor: ['Yellow','Blue'], size: enSize.large, imagePath: ['assets/images/products/p14.png'], rate: 4.4, price: 38, payNumber:1, dressStyle: enDressStyle.party },
  { id: 50, catId: 3, name: 'Gym Lightweight Hoodie', description: 'Light hoodie for workouts.', discount: 20, avaliableColor: ['Gray','Blue'], size: enSize.medium, imagePath: ['assets/images/products/p13.png'], rate: 4.5, price: 55, payNumber:1, dressStyle: enDressStyle.gym }
  ];
  }


  getNewArrivals(): Iproduct[] {
    return this.products.slice(2,7);
  }

  topSellingArrivals(): Iproduct[] {
    return this.products.slice(9,13);
  }

  getProductById(id:number) : Iproduct | any {
    return this.products.find(p=> p.id == id);
  }

  lowHighPrice(){
    let lowestPrice = this.products.reduce((min, product) =>
      product.price < min.price ? product : min
    ).price;

    const heightestPrice = this.products.reduce((min, product) =>
      product.price > min.price ? product : min
    ).price;

    return  {lowestPrice,heightestPrice };
  }


  getPaginated(pageNumber:number,sortedBy:enSortedBy = 1,ascending:boolean=true,pageSize:number=5){
    let numberOfProducts = this.products.length;
    let numberOfTotalPages = Math.ceil(numberOfProducts / pageSize) ;

    if(pageNumber <= numberOfTotalPages){
      let start = (pageNumber-1) * pageSize ;
      let end = start + pageSize

      if(end > numberOfProducts) {
        end = numberOfProducts;
        console.log('number of product == end')
      }

      let afterSort = this.products;

      if(sortedBy == enSortedBy.price && ascending){
         afterSort = this.products.sort((a, b) => a.price - b.price);
      }
      else if(sortedBy == enSortedBy.price && !ascending){
         afterSort = this.products.sort((a, b) => b.price - a.price);
      }
      else if(sortedBy == enSortedBy.discount){
        console.log("get in discout filter")
          afterSort = this.products.sort((a, b) => b.discount - a.discount);
      }

      console.log(afterSort);

      return {products: afterSort.slice(start,end),
              totalPages:numberOfTotalPages,
              numberOfProducts:numberOfProducts,
              pageNumber:pageNumber
      };
    }
    return {products: [],
              totalPages:0,
              numberOfProducts:0,
              pageNumber:0
      };

  }

  applayFilter(categoryId?:number,styleId?:number,size?:enSize | null,lowprice?:number,color?:string){

    let filteredProducts:Iproduct[] =[] ;
    if(categoryId && categoryId != 0){
      filteredProducts = this.products.filter(p=> p.id == categoryId);
    }
    console.log('after cat',this.products)
    if(styleId && styleId != 0){
      filteredProducts = this.products.filter(p=> p.dressStyle == styleId);
    }
    console.log('after style',this.products)

    if(size && size > 0){
      filteredProducts = this.products.filter(p=> p.size == size);
    }

    console.log('after size',this.products)

    if(lowprice && lowprice > 0){
      filteredProducts = this.products.filter(p=> p.price <= lowprice);
    }

    console.log('after lower price',this.products)

    if(color && color !=''){
      filteredProducts = this.products.filter(p=> p.avaliableColor.includes(color));
    }
    console.log('after color',this.products)

    return filteredProducts;
  }
}


export enum enSortedBy
{
  price=1,
  discount=2
}

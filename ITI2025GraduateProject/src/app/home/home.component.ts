import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  brands = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'CALVIN KLEIN'];

  
 

  
  newArrivals: any[] = [];
  topSelling: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const allProducts = [
      {
        id: 1,
        title: 'Black Pique Polo Shirt',
        price: 300,
        image: 'https://content.moss.co.uk/images/original/421843de-74b2-44d2-ba0d-bf49225e954e.jpg',
        rating: { rate: 4, count: 120 },
        description: 'Premium cotton polo shirt with modern fit.',
        youMightLike: [
          { id: 101, title: 'White Piqué Polo Shirt', price: 220, image: 'https://shop.porsche.com/_next/image?url=https%3A%2F%2Fassets-prod.porsche.com%2Fassets%2F0cc7667c-688f-4879-8cc1-686af55f0104.webp&w=1920&q=75' },
          { id: 102, title: 'Tobacco Merino-Blend Skipper Polo', price: 480, image:'https://content.moss.co.uk/images/original/966801581_04.jpg' },
          { id: 103, title: 'Taupe Merino-Blend Polo Shirt', price: 190, image: 'https://content.moss.co.uk/images/original/8f4d45a6-dd38-460d-be8c-a5f734ae7724.jpg' }
        ]
      },
      {
        id: 2,
        title: 'Mid Blue Crew-Neck T-Shirt',
        price: 200,
        image: 'https://content.moss.co.uk/images/extraextralarge/966830791_05.jpg',
        rating: { rate: 5, count: 200 },
        description: 'Comfortable crew-neck t-shirt for casual wear.',
        youMightLike: [
          { id: 104, title: 'Charcoal Heavy Weight Crew-Neck T-Shirt', price: 320, image: 'https://content.moss.co.uk/images/original/966828078_04.jpg' },
          { id: 105, title: 'Tan Crew-Neck T-Shirt', price: 260, image: 'https://content.moss.co.uk/images/original/966644721_04.jpg' },
          { id: 106, title: 'Dusty Pink Crew Neck T-Shirt', price: 300, image: 'https://content.moss.co.uk/images/original/966785025_05.jpg' }
        ]
      },
      {
        id: 3,
        title: 'Teal Corduroy Overshirt',
        price: 420,
        image: 'https://content.moss.co.uk/images/original/966892937_05.jpg',
        rating: { rate: 3, count: 90 },
        description: 'Stylish overshirt with corduroy texture.',
        youMightLike: [
          { id: 107, title: 'Olive Green Hoodie', price: 400, image: 'https://content.moss.co.uk/images/original/966935837_05.jpg' },
          { id: 108, title: 'Classic Black Loafers', price: 350, image: 'https://content.moss.co.uk/images/original/966993237_05.jpg' },
          { id: 109, title: 'White T-Shirt', price: 150, image: 'https://content.moss.co.uk/images/original/966810937_05.jpg' }
        ]
      },
      {
        id: 4,
        title: 'Navy Linen Shirt',
        price: 350,
        image: 'https://content.moss.co.uk/images/original/966855609_05.jpg',
        rating: { rate: 4, count: 150 },
        description: 'Lightweight linen shirt, perfect for summer.',
        youMightLike: [
          { id: 110, title: 'Khaki Chinos', price: 340, image: 'https://content.moss.co.uk/images/original/966912209_05.jpg' },
          { id: 111, title: 'Brown Belt', price: 120, image: 'https://content.moss.co.uk/images/original/966995909_05.jpg' },
          { id: 112, title: 'Leather Wallet', price: 200, image: 'https://content.moss.co.uk/images/original/966999309_05.jpg' }
        ]
      },
      {
        id: 5,
        title: 'Navy Wool Pleated Pants',
        price: 300,
        image: 'https://content.moss.co.uk/images/original/967001509_05.jpg',
        rating: { rate: 5, count: 235 },
        description: 'Classic pleated pants made from fine wool.',
        youMightLike: [
          { id: 113, title: 'Grey Blazer', price: 600, image: 'https://content.moss.co.uk/images/original/966950809_05.jpg' },
          { id: 114, title: 'White Formal Shirt', price: 280, image: 'https://content.moss.co.uk/images/original/966830809_05.jpg' },
          { id: 115, title: 'Black Leather Shoes', price: 450, image: 'https://content.moss.co.uk/images/original/966992009_05.jpg' }
        ]
      },
      {
        id: 6,
        title: 'Tailored Fit Black Stretch Suit',
        price: 600,
        image: 'https://content.moss.co.uk/images/original/966954715_08.jpg',
        rating: { rate: 5, count: 250 },
        description: 'Tailored suit with stretch fabric for comfort.',
        youMightLike: [
          { id: 116, title: 'Blue Silk Tie', price: 150, image: 'https://content.moss.co.uk/images/original/966913909_05.jpg' },
          { id: 117, title: 'White Pocket Square', price: 60, image: 'https://content.moss.co.uk/images/original/966913809_05.jpg' },
          { id: 118, title: 'Black Formal Shoes', price: 500, image: 'https://content.moss.co.uk/images/original/966991809_05.jpg' }
        ]
      },
      {
        id: 7,
        title: 'Mid Teal Merino-Blend Skipper Polo',
        price: 450,
        image: 'https://content.moss.co.uk/images/original/966930137_04.jpg',
        rating: { rate: 3, count: 550 },
        description: 'Stylish skipper polo made from merino blend.',
        youMightLike: [
          { id: 119, title: 'Casual White Shorts', price: 280, image: 'https://content.moss.co.uk/images/original/966915609_05.jpg' },
          { id: 120, title: 'Beige Sandals', price: 220, image: 'https://content.moss.co.uk/images/original/966999109_05.jpg' },
          { id: 121, title: 'Sunglasses', price: 180, image: 'https://content.moss.co.uk/images/original/966910809_05.jpg' }
        ]
      },
      {
        id: 8,
        title: 'Navy Moleskin Shacket',
        price: 350,
        image: 'https://content.moss.co.uk/images/original/967034109_05.jpg',
        rating: { rate: 4, count: 350 },
        description: 'Durable and warm moleskin shacket.',
        youMightLike: [
          { id: 122, title: 'Wool Scarf', price: 200, image: 'https://content.moss.co.uk/images/original/966995109_05.jpg' },
          { id: 123, title: 'Beanie Hat', price: 100, image: 'https://content.moss.co.uk/images/original/966995209_05.jpg' },
          { id: 124, title: 'Leather Gloves', price: 250, image: 'https://content.moss.co.uk/images/original/966995309_05.jpg' }
        ]
      }
    ];
    

    this.newArrivals = allProducts.slice(0, 4);
    this.topSelling = allProducts.slice(4, 8);
  }

  
  getStars(rating: number): number[] {
    return [1, 2, 3, 4, 5];
  }



goToDetails(id: number) {
  this.router.navigate(['/details', id]);
}


}

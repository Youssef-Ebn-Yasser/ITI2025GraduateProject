import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Icategory } from '../../models/icategory';

@Component({
  selector: 'app-product-card',
  imports: [NgIf,NgFor,NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product! :Iproduct;
  @Output() buyAction :EventEmitter<number>;


  constructor(){
    this.buyAction = new EventEmitter<number>();
  }


  onBuy(){
    this.buyAction.emit(this.product.id);
  }

}

import { publish } from "rxjs";

export interface Iproduct {
  id: number;
  catId:number;
  name: String;
  description: String;
  discount: number;
  avaliableColor: String[];
  size: enSize,
  imagePath: string[];
  rate: number;
  price: number;
  dressStyle: enDressStyle;
  payNumber:number;
}


export enum enSize {
  small = 1,
  medium = 2,
  large = 3,
  xLarge = 4
}

export enum enDressStyle {
  casual = 1,
  formal = 2,
  party = 3,
  gym = 4
}


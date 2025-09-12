export interface Iproduct {
  id: number;
  name: String;
  description: String;
  discount: Number;
  avaliableColor: String[];
  size: enSize,
  imagePath: string[];
  rate: number;
  price: number;
}


enum enSize {
  small = 1,
  medium = 2,
  large = 3,
  xLarge = 4
}

export class Entrada {
  id: number;
  price: number;
  title: string;
  date: string;
  address: string;
  type: string;
  resold: boolean;

  constructor() {
    this.id = 0;
    this.price = 0;
    this.title = "";
    this.date = "";
    this.address = "";
    this.type = "";
    this.resold = false;
  }
}

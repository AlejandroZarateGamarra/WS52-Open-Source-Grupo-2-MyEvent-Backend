export class PaymentCard {
  id:any;
  owner:any;
  number:any;
  expirationDate:any;
  cvv:any;
  funds:any;
  constructor(id:any, owner:any, number:any, expirationDate:any, cvv:any, funds:any){
    this.id = id;
    this.owner = owner;
    this.number = number;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
    this.funds = funds;
  }
}

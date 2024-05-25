export class Bill {
  id: any;
  billingDetails: {
    firstName: any;
    lastName: any;
    company: any;
    address1: any;
    address2: any;
    city: any;
    state: any;
    postcode: any;
    email: any;
    phone: any;
  };
  shippingDetails: {
    firstName: any;
    lastName: any;
    company: any;
    address1: any;
    address2: any;
    city: any;
    state: any;
    postcode: any;
  };
  orderItems: {
    productId: any;
    productName: any;
    quantity: any;
  }[];
  paymentMethod: any;
  totalAmount: any;

  constructor() {
    this.billingDetails = {
      firstName: null,
      lastName: null,
      company: null,
      address1: null,
      address2: null,
      city: null,
      state: null,
      postcode: null,
      email: null,
      phone: null,
    };
    this.shippingDetails = {
      firstName: null,
      lastName: null,
      company: null,
      address1: null,
      address2: null,
      city: null,
      state: null,
      postcode: null,
    };
    this.orderItems = [];
  }
}

export interface IOrder {
  //email: string;
  //password: string;
  userId: string;
  total: number;
  status: string;
  createdOn: Date;
  shippingAddress: IAddressSchema;
  products: IProductSchema;
  courierInfo: ICouriesSchema;
}

export interface IProductSchema {
  _id: String;
  productName: String;
  imageUrl: String;
  quantity: number;
  price: number;
}

export interface IAddressSchema {
  addressLine1: String;
  addressLine2:String;
  city: String;
  pin:String;
}

export interface ICouriesSchema {
  courierName: String;
  trackingNumber: String;
}

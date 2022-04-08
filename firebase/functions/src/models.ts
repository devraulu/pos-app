export interface IProduct {
  name: string;
  price: number;
  category: string;
  img: string;
  createdAt?: number | string;
  updatedAt?: number | string;
  createdBy?: string;
  deleted: boolean;
  objectID?: string;
  id?: string;
  code?: string;
  count?: number;
}

export interface IOrder {
  products: IProduct[];
  userID: string;
  clientID: string;
  taxes: number;
  subTotal: number;
  total: number;
  createdAt: string;
  payment: string;
  cardInfo?: ICardInfo;
  status: string;
}

export interface ICardInfo {
  last4Digits: string;
  nameOnCard: string;
}

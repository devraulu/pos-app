import { FieldValue, serverTimestamp } from 'firebase/firestore';

import { Email } from '@mui/icons-material';

export type FixMeLater = any;

export type IProduct = {
	name: string;
	price: number;
	category: string;
	img: string;
	createdAt?: number | string | FieldValue;
	updatedAt?: number | string | FieldValue;
	createdBy?: string;
	deleted: boolean;
	objectID?: string;
	id?: string;
	code?: string;
	count?: number;
};

export type Client = {
	name: string;
	createdAt?: number | FieldValue;
	updatedAt?: number | FieldValue;
	createdBy?: string;
	email: string;
	address: string;
	deleted: boolean;
	phone: string;
	cardCode: string;
	visits: number;
	points: number;
	id?: string;
	objectID?: string;
};

export type ClientHits = Client & {};

export interface ILogin {
	email: string;
	password: string;
}

export interface ICardInfo {
	last4Digits: string;
	nameOnCard: string;
}

export interface IOrder {
	products: IProduct[];
	userID: string;
	clientID: string;
	taxes: number;
	subTotal: number;
	total: number;
	createdAt: string | FieldValue;
	payment: string;
	cardInfo?: ICardInfo;
	status: string;
}


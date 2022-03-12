import { Email } from '@mui/icons-material';

export type FixMeLater = any;

export type Product = {
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
};

export type Client = {
	name: string;
	createdAt?: number;
	updatedAt?: number;
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

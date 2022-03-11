import { string } from "yup/lib/locale";

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

export type User = {
	user_name: string;
	name: string;
	phone: number;
	email: string;
};

export type Terminal = {
	name: string;
	terminal_number: number;
	user: string;
}

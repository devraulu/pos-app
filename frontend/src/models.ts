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
} & Record<string, any>;

export type User = {
	user_name: string;
	name: string;
	phone: number;
	email: string;
};

export type ClientHits = Client & {};

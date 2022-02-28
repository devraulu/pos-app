export type FixMeLater = any;

export type Product = {
	name: string;
	price: number;
	category: string;
	img: string;
	createdAt?: number;
	updatedAt?: number;
	createdBy?: string;
};

export type Client = {
	name: string;
	createdAt?: number;
	updatedAt?: number;
	createdBy?: string;
} & Record<string, any>;

export type ClientHits = Client & {};

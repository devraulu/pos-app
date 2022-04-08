import { Client, FixMeLater } from 'models';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	serverTimestamp,
	updateDoc,
	where,
} from 'firebase/firestore';

import { GridCellValue } from '@mui/x-data-grid';
import { IProduct } from 'models';
import { v4 } from 'uuid';
import { useFirestore } from 'reactfire';

export const formatToCurrency = (value: string | number | GridCellValue) =>
	Number(value).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});

export const formatClient = (values: Client) => ({
	...values,
	name: values.name.toUpperCase(),
	address: values.address.toUpperCase(),
	email: values.email.toLowerCase(),
	updatedAt: serverTimestamp(),
	deleted: false,
});

export const formatProduct = (values: IProduct) => ({
	...values,
	name: values.name.toUpperCase(),
	category: values.category.toUpperCase(),
	img:
		values.img ||
		'https://via.placeholder.com/150/000000/FFFFFF/?text=' + values.name,
	deleted: false,
	updatedAt: serverTimestamp(),
});

export const uuid = v4;


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
import { db } from 'firebase-config';
import { v4 } from 'uuid';

export const getDataFromDB = async () => {
	const querySnapshot = await getDocs(collection(db, 'products'));
	const data: FixMeLater[] = [];
	querySnapshot.forEach((doc) => {
		data.push(doc.data());
	});
	return data;
};

export const getDocByID = async (id: string, collectionName = 'products') => {
	const docRef = doc(db, collectionName, id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) return docSnap.data();
	else throw new Error('No such document');
};

export const getDocByCode = async (
	code: string,
	collectionName = 'products'
) => {
	const q = query(collection(db, collectionName), where('code', '==', code));
	const querySnapshot = await getDocs(q);
	return querySnapshot.docs[0];
};

export const deleteDocByID = async (
	id: string,
	collectionName = 'products'
) => {
	const docRef = doc(db, collectionName, id);
	await updateDoc(docRef, { deleted: true, updatedAt: serverTimestamp() });
};

export const formatToCurrency = (value: string | number) =>
	Number(value).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});

export const formatDGCellToCurrency = (value: GridCellValue) =>
	formatToCurrency;

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


import {
	collection,
	doc,
	getDoc,
	getDocs,
	serverTimestamp,
	updateDoc,
} from 'firebase/firestore';

import { FixMeLater } from '../models';
import { Product } from './../models';
import { db } from '../firebase';

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

	if (docSnap.exists()) return docSnap.data() as Product;
	else throw new Error('No such document');
};

export const deleteDocByID = async (
	id: string,
	collectionName = 'products'
) => {
	const docRef = doc(db, collectionName, id);
	await updateDoc(docRef, { deleted: true, updatedAt: serverTimestamp() });
};

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { FixMeLater } from '../models';

export const getDataFromDB = async () => {
	const querySnapshot = await getDocs(collection(db, 'products'));
	const data: FixMeLater[] = [];
	querySnapshot.forEach((doc) => {
		data.push(doc.data());
	});
	return data;
};

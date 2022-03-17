import { addDoc, collection } from 'firebase/firestore';

import { IOrder } from 'models';
import React from 'react';
import { db } from 'firebase-config';
import { resetCart } from 'store/checkout/checkout.slice';
import { toast } from 'react-toastify';
import { useAppDispatch } from 'store/hooks';

export default function useSaveOrder() {
	const dispatch = useAppDispatch();

	return async (order: IOrder) => {
		try {
			const docRef = await addDoc(collection(db, 'orders'), order);
			console.log('docRef:', docRef);
			toast.success('Se efectuó la compra correctamente');
			dispatch(resetCart());
		} catch (e) {
			console.log(e);
			toast.error('Error efectuando compra');
		}
	};
}

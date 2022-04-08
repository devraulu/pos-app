import { addDoc, collection } from 'firebase/firestore';

import { IOrder } from 'models';
import { resetCart } from 'store/checkout/checkout.slice';
import { toast } from 'react-toastify';
import { useAppDispatch } from 'store/hooks';
import { useFirestore } from 'reactfire';

export default function useSaveOrder() {
	const dispatch = useAppDispatch();
	const db = useFirestore();

	return async (order: IOrder) => {
		try {
			const docRef = await addDoc(collection(db, 'orders'), order);
			toast.success('Se efectuó la compra correctamente');
			dispatch(resetCart());
		} catch (e) {
			toast.error('Error efectuando compra');
		}
	};
}


import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { Button } from '@mui/material';
import { db } from 'firebase';
import { mapCartState } from 'store/checkout/checkout.selectors';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const PayButton: React.FunctionComponent = () => {
	const { count, cartProducts, total, taxes, subTotal } =
		useSelector(mapCartState);

	const saveOrder = async () => {
		try {
			const docRef = await addDoc(collection(db, 'orders'), {
				products: cartProducts,
				userID: 'anonymous',
				clientID: 'anonymous',
				taxes,
				subTotal,
				total,
				createdAt: serverTimestamp(),
				payment: 'cash',
				cardNumber: 'xxxxxxxx4242',
				nameOnCard: 'John Doe',
			});
			console.log('docRef:', docRef);
			toast.success('Se efectuó la compra correctamente');
		} catch (e) {
			console.log(e);
			toast.error('Error guardando el cliente');
		}
	};

	const handleClick = () => {
		saveOrder();
	};

	return (
		<Button
			disabled={count < 1}
			onClick={handleClick}
			variant='contained'
			color='primary'
			size='large'>
			Pay
		</Button>
	);
};

export default PayButton;

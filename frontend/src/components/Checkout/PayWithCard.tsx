import { Button } from '@mui/material';
import { CreditCard as CreditCardIcon } from '@mui/icons-material';
import { mapCartState } from 'store/checkout/checkout.selectors';
import { useSelector } from 'react-redux';
interface PayWithCardProps {}

const PayWithCard: React.FunctionComponent<PayWithCardProps> = () => {
	const { count, cartProducts, total, taxes, subTotal, client } =
		useSelector(mapCartState);

	const handleClick = () => {};

	return (
		<Button
			disabled={count < 1}
			onClick={handleClick}
			variant='contained'
			color='primary'
			size='large'
			endIcon={<CreditCardIcon />}
			sx={{ width: '100%' }}>
			Pagar con CC
		</Button>
	);
};

export default PayWithCard;

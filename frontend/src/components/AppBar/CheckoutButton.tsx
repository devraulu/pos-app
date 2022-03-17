import { Button } from '@mui/material';
import { css } from '@emotion/react';
interface CheckoutButtonProps {}

const CheckoutButton: React.FunctionComponent<CheckoutButtonProps> = () => {
	return (
		<Button
			variant='contained'
			href='/checkout'
			color='secondary'
			size='large'
			css={css`
				margin-right: 15px;
				&:hover {
					transform: scale(0.95);
					transition: all 0.2s ease-in-out;
				}
			`}>
			Despachar
		</Button>
	);
};

export default CheckoutButton;

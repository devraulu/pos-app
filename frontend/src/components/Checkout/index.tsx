import { Grid } from '@mui/material';

import Menu from './Menu';
import Order from './Order';
import ProductsInstantSearch from 'components/Products/ProductsInstantSearch';
import { css } from '@emotion/react';

export default function Checkout() {
	return (
		<Grid
			container
			spacing={2}
			columnSpacing={5}
			p={2}
			className='checkout-wrapper'>
			<ProductsInstantSearch>
				<Grid item xs={5} display={'flex'} flexDirection='column'>
					<Order />
				</Grid>
				<Grid item xs={7}>
					<Menu />
				</Grid>
			</ProductsInstantSearch>
		</Grid>
	);
}

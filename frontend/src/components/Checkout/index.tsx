import { Box, Grid } from '@mui/material';

import CheckoutHits from './CheckoutHits';
import ProductsInstantSearch from 'components/Products/ProductsInstantSearch';
import ProductsSearch from './ProductsSearch';

export default function Checkout() {
	return (
		<Grid container spacing='2' sx={{ p: 4 }}>
			<Grid item xs={8}>
				<Box>
					<ProductsInstantSearch>
						<ProductsSearch />
						<CheckoutHits />
					</ProductsInstantSearch>
				</Box>
			</Grid>
			<Grid item xs={4}>
				<Box
					sx={
						{
							// backgroundColor: 'primary.dark',
							// heigth: 100,
							// width: 100,
						}
					}>


</Box>
			</Grid>
		</Grid>
	);
}

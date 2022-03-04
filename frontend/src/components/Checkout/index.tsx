import { Box, Grid } from '@mui/material';

import BarcodeScanner from './BarcodeScanner';
import CheckoutHits from './CheckoutHits';
import ProductsInstantSearch from 'components/Products/ProductsInstantSearch';
import ProductsSearch from './ProductsSearch';
import { css } from '@emotion/react';

export default function Checkout() {
	return (
		<Grid container spacing='2' sx={{ p: 4 }}>
			<Grid item xs={8}>
				<Box>
					<ProductsInstantSearch>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<ProductsSearch />
							<BarcodeScanner
								cssProp={css`
									margin-left: 1rem;
									width: 100px;
									height: 100px;
								`}
							/>
						</Box>
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
					}></Box>
			</Grid>
		</Grid>
	);
}

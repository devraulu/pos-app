import * as React from 'react';

import { Box, Button, Grid } from '@mui/material';

import PayWithCard from './PayWithCard';
import PayWithCash from './PayWithCash';
import BarcodeScanner from './BarcodeScanner';

interface MenuProps { }

const Menu: React.FunctionComponent<MenuProps> = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				height: '100%',
			}}>
			<Grid container sx={{ justifyContent: 'space-between' }}>
				<Grid item xs={12}>
					<BarcodeScanner />
				</Grid>
				<Grid
					item
					sx={{
						display: 'flex',
						width: '100%',
					}}>
					<Box sx={{ width: '50%' }}>
						<PayWithCash />
					</Box>
					<Box sx={{ width: '50%' }} ml={2}>
						<PayWithCard />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Menu;

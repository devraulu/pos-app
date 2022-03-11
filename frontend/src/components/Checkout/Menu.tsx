import * as React from 'react';

import { Box, Button, Grid } from '@mui/material';

import PayButton from './PayButton';

interface MenuProps {}

const Menu: React.FunctionComponent<MenuProps> = () => {
	return (
		<Box>
			<Grid container>
				<Grid item>
					<PayButton />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Menu;

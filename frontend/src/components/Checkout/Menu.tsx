import * as React from 'react';

import { Box, Button, Grid } from '@mui/material';

interface MenuProps {}

const Menu: React.FunctionComponent<MenuProps> = () => {
	return (
		<Box>
			<Grid container>
				<Grid item>
					<Button variant='contained' color='primary' size='large'>
						Pay
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Menu;

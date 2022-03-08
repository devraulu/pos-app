import * as React from 'react';

import { Box, Grid } from '@mui/material';

import Cart from './Cart';
import ClientInfo from './ClientInfo';
import ClientsInstantSearch from 'components/Clients/ClientsInstantSearch';
import ClientsSearch from './ClientsSearch';
import ProductsSearch from './ProductsSearch';

interface OrderProps {}

const Order: React.FunctionComponent<OrderProps> = () => {
	return (
		<>
			<Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
					}}>
					<ClientsInstantSearch>
						<ClientsSearch />
					</ClientsInstantSearch>
					<Box ml={2} width={'100%'}>
						<ProductsSearch />
					</Box>
				</Box>
				<Box mt={2}>
					<ClientInfo />
				</Box>
			</Box>

			<Box mt={2} flexGrow={1}>
				<Cart />
			</Box>
		</>
	);
};

export default Order;

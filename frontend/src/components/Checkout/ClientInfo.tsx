import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import { FunctionComponent, useState } from 'react';

import { Client } from 'models';
import { CreditCard as CreditCardIcon } from '@mui/icons-material';
import { getDocByID } from 'utils';
import { selectClient } from 'store/checkout/checkout.selectors';
import { stringAvatar } from 'utils/avatar';
import { toast } from 'react-toastify';
import { useAppSelector } from 'store/hooks';
import { useSelector } from 'react-redux';

interface ClientInfoProps {}

const ClientInfo: FunctionComponent<ClientInfoProps> = () => {
	const client = useSelector(selectClient);
	// const getClient = async (id: string) => {
	// 	try {
	// 		const data = await getDocByID(id, 'clients');
	// 		setClient(data);
	// 	} catch (e) {
	// 		toast.error((e as Error).message);
	// 	}
	// };

	// useEffect;

	return (
		<Box>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Avatar {...stringAvatar(client?.name)} />
				<Typography variant='h5' component='h2' sx={{ ml: 2 }}>
					{client?.name || 'Anonimo'}
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
					mt: 2,
				}}>
				{/* <Button variant='contained' size='large' sx={{ width: '40%' }}>
					<CreditCardIcon />
				</Button>
				<Button variant='contained' color='secondary' sx={{ width: '40%' }}>
					Compras
				</Button> */}
			</Box>
		</Box>
	);
};

export default ClientInfo;

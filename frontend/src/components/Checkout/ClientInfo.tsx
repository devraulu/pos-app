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

	return (
		<Box>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Avatar {...stringAvatar(client?.name)} />
				<Box sx={{ ml: 2 }}>
					<Typography variant='h5' component='h2'>
						{client?.name || 'Anonimo'}
					</Typography>
					<Typography>{client?.cardCode}</Typography>
				</Box>
			</Box>
			{client && (
				<Box
					sx={{
						ml: 7,
						display: 'flex',
						textAlign: 'center',
					}}>
					<Box sx={{ mt: 2 }}>
						<Typography variant='body1'>Visitas</Typography>
						<Typography variant='h4'>{client?.visits}</Typography>
					</Box>
					<Box sx={{ mt: 2, ml: 3 }}>
						<Typography variant='body1'>Puntos</Typography>
						<Typography variant='h4'>{client?.points}</Typography>
					</Box>
				</Box>
			)}
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
					mt: 2,
				}}></Box>
		</Box>
	);
};

export default ClientInfo;

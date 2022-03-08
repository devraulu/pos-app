import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import { FunctionComponent, useState } from 'react';

import { Client } from 'models';
import { CreditCard as CreditCardIcon } from '@mui/icons-material';
import { getDocByID } from 'utils';
import { selectClient } from 'store/checkout/checkout.slice';
import { toast } from 'react-toastify';
import { useAppSelector } from 'store/hooks';
import { useSelector } from 'react-redux';

interface ClientInfoProps {
	clientID?: string;
}

const ClientInfo: FunctionComponent<ClientInfoProps> = ({ clientID }) => {
	// const clientID = useAppSelector(selectClient);

	const [client, setClient] = useState<Client>({ name: 'Anonimo' } as Client);

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
				<Avatar />
				<Typography variant='h5' component='h2' sx={{ ml: 2 }}>
					{client?.name}
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
					mt: 2,
				}}>
				<Button variant='contained' size='large' sx={{ width: '40%' }}>
					<CreditCardIcon />
				</Button>
				<Button variant='contained' color='secondary' sx={{ width: '40%' }}>
					Compras
				</Button>
			</Box>
		</Box>
	);
};

export default ClientInfo;

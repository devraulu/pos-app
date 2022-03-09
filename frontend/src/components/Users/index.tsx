import { Box, Button, Typography } from '@mui/material';

import { Hits } from './Hits';
import { SearchBox } from '../common/SearchBox';
// import { SearchBox } from '../SearchBox';

export default function Clients() {
	return (
		<Box sx={{ p: 3 }}>
			<Box alignItems={'center'} sx={{ display: 'flex' }}>
				<Box>
					<Typography variant='h2'>Clientes</Typography>
				</Box>
				<Box sx={{ ml: 4 }}>
					<Button href='/clients/new' variant='contained'>
						Nuevo
					</Button>
				</Box>
				<Box sx={{ flexGrow: 1, ml: 50 }}>
					<SearchBox placeholder='Search by name...' />
				</Box>
			</Box>
			<Hits />
		</Box>
	);
}

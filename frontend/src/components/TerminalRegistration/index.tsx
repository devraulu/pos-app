import { Box, Button, Typography } from '@mui/material';

import { Hits } from './Hits';
import { SearchBox } from '../common/SearchBox';
// import { SearchBox } from '../SearchBox';

export default function Users() {
	return (
		<Box sx={{ p: 3 }}>
			<Box alignItems={'center'} sx={{ display: 'flex' }}>
				<Box>
					<Typography variant='h2'>Terminales</Typography>
				</Box>
				<Box sx={{ ml: 4 }}>
					<Button href='/terminals/new' variant='contained'>
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

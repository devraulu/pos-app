import { Box, Button, Typography } from '@mui/material';

import FilterUsers from './FilterUsers';
import { Hits } from './Hits';
import { SearchBox } from '../common/SearchBox';

// import { SearchBox } from '../SearchBox';

export default function Users() {
	return (
		<Box sx={{ p: 3 }}>
			<Box alignItems={'center'} sx={{ display: 'flex' }}>
				<Box>
					<Typography variant='h2'>Usuarios</Typography>
				</Box>
				<Box sx={{ ml: 4 }}>
					<Button href='/users/new' variant='contained'>
						Nuevo
					</Button>
				</Box>
				<Box sx={{ flexGrow: 1, ml: 50 }}>
					<FilterUsers />
				</Box>
			</Box>
			<Hits />
		</Box>
	);
}

import { Box, Button, Typography } from '@mui/material';
// import { SearchBox } from '../SearchBox';

export default function Clients() {
	return (
		<Box sx={{ p: 3 }}>
			<Box alignItems={'center'} sx={{ display: 'flex' }}>
				<Box>
					<Typography variant='h2'>Productos</Typography>
				</Box>
				<Box sx={{ ml: 4 }}>
					<Button href='/products/new' variant='contained'>
						Nuevo
					</Button>
				</Box>
				<Box sx={{ flexGrow: 1, ml: 50 }}>
					{/* <SearchBox placeholder='Search by name, category...' /> */}
				</Box>
			</Box>
			{/* <Hits hitComponent={ProductCard} /> */}
		</Box>
	);
}

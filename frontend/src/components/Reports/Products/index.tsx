import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import FilterSelect from '../FilterSelect';
import ProductsDG from './ProductsDG';
import useMostSoldProducts from 'hooks/firebase/useMostSoldProducts';
import { TimeQueries } from 'utils/timeQueries';

interface ProductsProps {}

const timeOptions = {
	last7Days: 'Ultimos 7 dias',
	last30Days: 'Ultimos 30 dias',
	last90Days: 'Ultimos 90 dias',
};

const Products: React.FunctionComponent<ProductsProps> = () => {
	const [time, setTime] = useState('last7Days');

	const hits = useMostSoldProducts(time as keyof TimeQueries);

	return (
		<Box>
			<Box>
				<Grid container>
					<Grid item>
						<FilterSelect
							name='Tiempo'
							value={time}
							setValue={setTime}
							options={timeOptions}
						/>
					</Grid>
				</Grid>
			</Box>
			<Box>
				<Box sx={{ w: 100, mt: 4 }}>
					<ProductsDG hits={hits} />
				</Box>
			</Box>
		</Box>
	);
};

export default Products;


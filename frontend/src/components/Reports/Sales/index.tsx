import { Box, Grid } from '@mui/material';

import { useState } from 'react';
import FilterSelect from '../FilterSelect';
import SalesDG from './SalesDG';
import useOrdersByDate from 'hooks/firebase/useOrdersByDate';
import { TimeQueries } from 'utils/timeQueries';

interface VentasProps {}

const timeOptions = {
	last7Days: 'Ultimos 7 dias',
	last30Days: 'Ultimos 30 dias',
	last90Days: 'Ultimos 90 dias',
};

const Sales: React.FunctionComponent<VentasProps> = () => {
	const [time, setTime] = useState('last7Days');

	const orders = useOrdersByDate(time as keyof TimeQueries);

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
					<SalesDG hits={orders || []} />
				</Box>
			</Box>
		</Box>
	);
};

export default Sales;


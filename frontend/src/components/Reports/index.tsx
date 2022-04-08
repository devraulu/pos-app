import { Box, Tab, Tabs } from '@mui/material';
import { useCollectionFromDB, useDB } from 'hooks/firebase';
import { useState } from 'react';
import Products from './Products';
import Sales from './Sales';
import TabPanel from './TabPanel';

interface ReportsProps {}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const Reports: React.FunctionComponent<ReportsProps> = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 2 }}>
				<Tabs value={value} onChange={handleChange} aria-label='menu reportes'>
					<Tab label='Ventas' {...a11yProps(0)} />
					<Tab label='Productos' {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<Sales />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Products />
			</TabPanel>
		</>
	);
};

export default Reports;


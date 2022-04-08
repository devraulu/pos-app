import {
	DataGrid,
	GridToolbar,
	GridToolbarContainer,
	GridToolbarExport,
} from '@mui/x-data-grid';
import { useState } from 'react';
import salesDGColumns from './salesDGColumns';

type Props = {
	hits: any[];
};

export default function SalesDG({ hits }: Props) {
	const [pageSize, setPageSize] = useState(0);

	const CustomToolbar = () => (
		<GridToolbarContainer>
			<GridToolbarExport
				printOptions={{
					hideFooter: true,
					hideToolbar: true,
				}}
			/>
		</GridToolbarContainer>
	);

	return (
		<>
			<DataGrid
				sx={{ height: 572 }}
				columns={salesDGColumns}
				rows={hits || []}
				components={{ Toolbar: GridToolbar }}
			/>
		</>
	);
}


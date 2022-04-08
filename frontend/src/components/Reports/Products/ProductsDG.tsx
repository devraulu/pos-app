import {
	DataGrid,
	GridToolbar,
	GridToolbarContainer,
	GridToolbarExport,
} from '@mui/x-data-grid';
import { useState } from 'react';
import productsDGColumns from './productsDGColumns';

type Props = {
	hits: any[];
};

export default function ProductsDG({ hits }: Props) {
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
				columns={productsDGColumns}
				getRowId={(row) => row.objectID}
				rows={hits || []}
				components={{ Toolbar: GridToolbar }}
			/>
		</>
	);
}


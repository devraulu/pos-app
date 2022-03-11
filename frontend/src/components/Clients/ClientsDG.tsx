import {
	DataGrid,
	GridActionsCellItem,
	GridActionsColDef,
	GridColDef,
	GridRowModel,
	GridValueFormatterParams,
} from '@mui/x-data-grid';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

import { CustomPagination } from './CustomPagination';
import { formatDGCellToCurrency } from '../../utils';
import { navigate } from '@reach/router';
import { useState } from 'react';

type Props = {
	hits: any[];
	nbHits: number;
	hitsPerPage: number;
	page: number;
	handlePageChange: (page: number) => void;
};

export default function ClientsDG({
	hits,
	nbHits,
	hitsPerPage,
	page,
	handlePageChange,
}: Props) {
	const [modal, setModal] = useState(false);
	const columns: Array<GridColDef | GridActionsColDef> = [
		{
			field: 'name',
			headerName: 'Nombre',
			sortable: true,
			minWidth: 250,
		},
		{
			field: 'email',
			headerName: 'E-mail',
			minWidth: 200,
		},
		{
			field: 'phone',
			headerName: 'Telefono',
			width: 150,
		},
		{
			field: 'rnc',
			headerName: 'RNC',
		},
		{
			field: 'address',
			headerName: 'Dirección',
			width: 150,
		},
		{
			field: 'cardCode',
			headerName: 'Codigo de tarjeta',
		},
		{
			field: 'visits',
			headerName: 'Visitas',
		},
		{
			field: 'points',
			headerName: 'Puntos',
		},
		{
			field: 'actions',
			type: 'actions',
			getActions: (params) => [
				<GridActionsCellItem
					icon={<DeleteIcon />}
					label='Delete'
					onClick={() => {}}
				/>,
				<GridActionsCellItem
					icon={<EditIcon />}
					label='Edit'
					onClick={() => navigate(`/clients/${params.id}/edit`)}
				/>,
			],
		},
	];

	return (
		<>
			<DataGrid
				pagination
				autoHeight
				disableColumnMenu
				columns={columns}
				rows={hits || []}
				rowCount={nbHits}
				getRowId={(row: GridRowModel) => row.objectID}
				rowsPerPageOptions={[50, 80, 100]}
				pageSize={hitsPerPage}
				components={{
					Pagination: () => (
						<CustomPagination page={page} handlePageChange={handlePageChange} />
					),
				}}
				className='text-truncate'
			/>
		</>
	);
}

import {
	Check as CheckIcon,
	Close as CloseIcon,
	Delete as DeleteIcon,
	Edit as EditIcon,
} from '@mui/icons-material';
import {
	DataGrid,
	GridActionsCellItem,
	GridActionsColDef,
	GridColDef,
	GridRenderCellParams,
	GridRowModel,
} from '@mui/x-data-grid';

import { User } from 'firebase/auth';
import { navigate } from '@reach/router';
import { useState } from 'react';

type Props = {
	hits: User[];
	nbHits: number;
};

export default function UsersDG({ hits, nbHits, ...rest }: Props) {
	const [pageSize, setPageSize] = useState(25);

	const columns: Array<GridColDef | GridActionsColDef> = [
		{
			field: 'displayName',
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
			field: 'customClaims.admin',
			headerName: 'Admin',
			type: 'boolean',
			renderCell: (params: GridRenderCellParams<boolean>) =>
				params.row?.customClaims?.admin ? (
					<CheckIcon color='primary' />
				) : (
					<CloseIcon />
				),
			sortable: false,
		},
		{
			field: 'actions',
			type: 'actions',
			getActions: (params) => [
				<GridActionsCellItem
					icon={<DeleteIcon color='error' />}
					label='Delete'
					onClick={() => {}}
				/>,
				<GridActionsCellItem
					icon={<EditIcon color='primary' />}
					label='Edit'
					onClick={() => navigate(`/users/${params.id}/edit`)}
				/>,
			],
		},
	];

	return (
		<DataGrid
			pagination
			autoHeight
			disableColumnMenu
			columns={columns}
			rows={hits || []}
			rowCount={nbHits}
			getRowId={(row: GridRowModel) => row.uid}
			rowsPerPageOptions={[25, 50, 100]}
			pageSize={pageSize}
			onPageSizeChange={(newPage) => setPageSize(newPage)}
			className='text-truncate'
			{...rest}
		/>
	);
}


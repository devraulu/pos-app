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
	GridCellValue,
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
			flex: 1,
		},
		{
			field: 'email',
			headerName: 'E-mail',
			minWidth: 200,
			flex: 1,
		},

		{
			field: 'customClaims.admin',
			headerName: 'Admin',
			type: 'boolean',
			renderCell: (params: GridRenderCellParams<boolean>) =>
				params.row?.customClaims?.admin ? (
					<CheckIcon color='success' />
				) : (
					<CloseIcon />
				),
			//@ts-ignore
			sortComparator: (a: GridCellValue, b: GridCellValue) => a === b,
			flex: 1,
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
					icon={<EditIcon />}
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


import { paymentMethodMap, orderStatusMap } from '../orderPropertyMap';
import * as dayjs from 'dayjs';
import {
	GridActionsColDef,
	GridColDef,
	GridValueFormatterParams,
} from '@mui/x-data-grid';
import { Timestamp } from 'firebase/firestore';
import { formatToCurrency } from 'utils';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(LocalizedFormat);

const productsDGColumns: Array<GridColDef | GridActionsColDef> = [
	// name: string;
	// price: number;
	// category: string;
	// img: string;
	// createdAt?: number | string | FieldValue;
	// updatedAt?: number | string | FieldValue;
	// createdBy?: string;
	// deleted: boolean;
	// objectID?: string;
	// id?: string;
	// code?: string;
	// count?: number;
	{
		field: 'name',
		headerName: 'Descripción',
		sortable: true,
		flex: 0.5,
	},
	{
		field: 'price',
		headerName: 'Precio',
		valueFormatter: (params: GridValueFormatterParams) =>
			formatToCurrency(params?.value || 0),
		minWidth: 150,
	},
	{
		field: 'category',
		headerName: 'Categoría',
		sortable: true,
		flex: 0.5,
	},
	{
		field: 'count',
		headerName: 'Unidades vendidas',
	},
	{
		field: 'createdAt',
		headerName: 'Fecha',
		valueFormatter: (params: GridValueFormatterParams) => {
			console.log('Date', params.value);
			const formattedDate = dayjs(Number(params?.value)).format('L LT');
			if (formattedDate === 'Invalid Date') {
				console.log('Invalid Date', params?.value);
				return 'N/A';
			}
			return formattedDate;
		},
		sortComparator: (a, b) => Number(a) - Number(b),
		flex: 0.5,
	},
];

export default productsDGColumns;


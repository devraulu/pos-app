import { paymentMethodMap, orderStatusMap } from '../orderPropertyMap';
import * as dayjs from 'dayjs';
import {
	GridActionsColDef,
	GridColDef,
	GridValueFormatterParams,
} from '@mui/x-data-grid';
import { Timestamp } from 'firebase/firestore';
import { formatToCurrency } from 'utils';

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
			return dayjs(Number(params?.value)).format('L LT');
		},
		flex: 0.5,
	},
];

export default productsDGColumns;


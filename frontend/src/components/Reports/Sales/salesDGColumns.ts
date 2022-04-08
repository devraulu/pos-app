import { paymentMethodMap, orderStatusMap } from './../orderPropertyMap';
import * as dayjs from 'dayjs';
import {
	GridActionsColDef,
	GridColDef,
	GridValueFormatterParams,
} from '@mui/x-data-grid';
import { Timestamp } from 'firebase/firestore';
import { formatToCurrency } from 'utils';

const salesDGColumns: Array<GridColDef | GridActionsColDef> = [
	{
		field: 'total',
		headerName: 'Total',
		sortable: true,
		valueFormatter: (params: GridValueFormatterParams) =>
			formatToCurrency(params.value),
	},
	{
		field: 'userEmail',
		headerName: 'E-mail del cajero',
		width: 250,
	},
	{
		field: 'createdAt',
		headerName: 'Fecha',
		valueFormatter: (params: GridValueFormatterParams) => {
			return dayjs.unix((params.value as Timestamp).seconds).format('L LT');
		},
		minWidth: 150,
	},
	{
		field: 'clientID',
		headerName: 'Cliente',
		valueFormatter: (params: GridValueFormatterParams) =>
			params?.value === 'anonymous' ? 'Anónimo' : params?.value,
	},
	{
		field: 'payment',
		headerName: 'Pago',
		valueFormatter: (params: GridValueFormatterParams) =>
			paymentMethodMap[params.value as keyof typeof paymentMethodMap],
	},
	{
		field: 'status',
		headerName: 'Estado',
		valueFormatter: (params: GridValueFormatterParams) =>
			orderStatusMap[params.value as keyof typeof orderStatusMap],
	},
	{
		field: 'cardNumber',
		headerName: 'Últimos 4 dígitos',
		flex: 0.5,
		valueFormatter: (params: GridValueFormatterParams) => {
			const str = params?.value?.toString();
			return str?.slice(-4) ?? 'N/A';
		},
	},
	{
		field: 'nameOnCard',
		flex: 0.5,
		headerName: 'Nombre en la tarjeta',
		valueFormatter: (params: GridValueFormatterParams) =>
			params?.value ?? 'N/A',
	},
];

export default salesDGColumns;


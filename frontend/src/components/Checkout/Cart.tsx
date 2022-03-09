import {
	Box,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import { TAX_RATE, mapCartState } from 'store/checkout/checkout.selectors';

import { FunctionComponent } from 'react';
import { formatToCurrency } from 'utils';
import { useSelector } from 'react-redux';

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
	const { cartProducts, count, total, subTotal, taxes } =
		useSelector(mapCartState);
	return (
		<Box
			display='flex'
			flexDirection={'column'}
			height={'100%'}
			justifyContent={'space-between'}>
			<Paper sx={{ width: '100%', overflow: 'hidden' }}>
				<TableContainer sx={{ maxHeight: 400 }}>
					<Table stickyHeader>
						<TableHead>
							<TableRow>
								<TableCell align='center' colSpan={3}>
									Detalles
								</TableCell>
								<TableCell align='right'>Precio</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Descripci&oacute;n</TableCell>
								<TableCell>Cantidad</TableCell>
								<TableCell>Unidad</TableCell>
								<TableCell>Suma</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{cartProducts.length > 0 ? (
								cartProducts.map(({ name, count, price }) => (
									<TableRow key={name}>
										<TableCell>{name}</TableCell>
										<TableCell align='right'>{count}</TableCell>
										<TableCell align='right'>
											{formatToCurrency(price)}
										</TableCell>
										<TableCell align='right'>
											{formatToCurrency(count * price)}
										</TableCell>
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell colSpan={4}>
										No hay productos en el carrito
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
			<Grid container textAlign={'right'} mt={2} spacing={1}>
				<Grid item xs={6} textAlign='left'>
					<Typography>Subtotal</Typography>
				</Grid>
				<Grid item xs={6} alignSelf='right'>
					<Typography>{formatToCurrency(subTotal)}</Typography>
				</Grid>
				<Grid item xs={4} textAlign='left'>
					<Typography>Tax</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography>{`${(TAX_RATE * 100).toFixed(0)} %`}</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography>{formatToCurrency(taxes)}</Typography>
				</Grid>
				<Grid item xs={6} textAlign='left'>
					<Typography variant='h5' component='h2'>
						Total
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant='h4' component='h2'>
						{formatToCurrency(total)}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Cart;

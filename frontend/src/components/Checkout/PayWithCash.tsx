import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
	Typography,
} from '@mui/material';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

import Bills from './Bills';
import { Paid as PaidIcon } from '@mui/icons-material';
import { mapCartState } from 'store/checkout/checkout.selectors';
import { serverTimestamp } from 'firebase/firestore';
import useSaveOrder from 'hooks/firebase/useSaveOrder';
import { useSelector } from 'react-redux';
import { useUser } from 'reactfire';

const PayWithCash: React.FunctionComponent = () => {
	const { count, cartProducts, total, taxes, subTotal, client } =
		useSelector(mapCartState);
	const [receivedMoney, setReceivedMoney] = useState<null | number>(0);
	const [selectedBill, setSelectedBill] = useState(0);
	const [change, setChange] = useState(0);
	const { status, data: user } = useUser();
	const saveOrder = useSaveOrder();

	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);
	const handleClickOpen = () => setOpen(true);

	const handleSelectedBillChange = (
		event: React.MouseEvent<HTMLElement>,
		newBill: number
	) => {
		if (receivedMoney !== null) setReceivedMoney(0);
		setSelectedBill(newBill);
		calculateChange(newBill);
	};
	const handleReceivedMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
		const parsedValue = parseInt(e.target.value);
		const value = isNaN(parsedValue) ? null : parsedValue;
		if (value && value > 10000000) return;
		setReceivedMoney(value);
		calculateChange(value);
	};

	const calculateChange = (moneyReceived: null | number) =>
		moneyReceived && setChange(moneyReceived - total);

	const handlePay = () => {
		const order = {
			products: cartProducts,
			userID: user?.uid ?? '',
			userEmail: user?.email ?? '',
			clientID: client?.id || 'anonymous',
			taxes,
			subTotal,
			total,
			createdAt: serverTimestamp(),
			payment: 'cash',
			// cardNumber: 'xxxxxxxx4242',
			// nameOnCard: 'John Doe',
			status: 'finished',
		};

		saveOrder(order);
	};

	return (
		<>
			<Button
				disabled={count < 1}
				onClick={handleClickOpen}
				variant='contained'
				color='primary'
				size='large'
				endIcon={<PaidIcon />}
				sx={{ width: '100%' }}>
				Pagar en efectivo
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
				maxWidth='md'
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'>
				<DialogTitle id='alert-dialog-title'>Pagar en efectivo</DialogTitle>
				<DialogContent>
					<Box sx={{ py: 3, display: 'flex' }}>
						<Box>
							<Box>
								<Bills
									// disabled={receivedMoney && receivedMoney > 0}
									value={selectedBill}
									handleChange={handleSelectedBillChange}
								/>
							</Box>
							<Box mt={3}>
								<TextField
									autoFocus
									label='Efectivo'
									name='efectivo'
									type='number'
									value={receivedMoney}
									onChange={handleReceivedMoney}
								/>
							</Box>
						</Box>
						<Box sx={{ flex: 1, textAlign: 'center' }}>
							<Typography variant='h4'>Devuelta:</Typography>
							<Typography variant='h1'>${change.toFixed(2)}</Typography>
						</Box>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='secondary'>
						Cancelar
					</Button>
					<Button
						onClick={() => {
							handlePay();
							handleClose();
						}}>
						Pagar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default PayWithCash;


import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { ReactNode } from 'react';

type Props = {
	open: boolean;
	handleCancel: () => void;
	handleConfirm: () => void;
	productName: string;
	message: string | ReactNode;
};
export default function DeleteDialog({
	message,
	open,
	handleCancel,
	handleConfirm,
	productName,
}: Props) {
	return (
		<Dialog open={open}>
			<DialogContent>
				<DialogContentText>
					<>{message}</>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleCancel}>Cancel</Button>
				<Button onClick={handleConfirm} autoFocus>
					Delete
				</Button>
			</DialogActions>
		</Dialog>
	);
}

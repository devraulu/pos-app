import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
} from '@mui/material';
import { ReactNode } from 'react';

type Props = {
	open: boolean;
	handleCancel: () => void;
	handleConfirm: () => void;
	message: string | ReactNode;
};

export default function DeleteDialog({
	message,
	open,
	handleCancel,
	handleConfirm,
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

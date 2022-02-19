import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';

type Props = {
	open: boolean;
	handleCancel: () => void;
	handleConfirm: () => void;
	productName: string;
};
export default function DeleteDialog({
	open,
	handleCancel,
	handleConfirm,
	productName,
}: Props) {
	return (
		<Dialog open={open}>
			<DialogContent>
				<DialogContentText>
					Delete product with name: <strong>{productName}</strong>
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

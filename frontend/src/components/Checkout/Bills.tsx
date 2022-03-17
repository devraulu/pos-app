import { ToggleButton, ToggleButtonGroup } from '@mui/material';

interface BillsProps {
	disabled?: boolean;
	value: number;
	handleChange: (event: React.MouseEvent<HTMLElement>, newBill: number) => void;
}

const Bills: React.FunctionComponent<BillsProps> = ({
	disabled,
	value,
	handleChange,
}) => {
	const bills = [20, 50, 100, 200, 500, 1000, 2000];

	return (
		<ToggleButtonGroup
			exclusive
			disabled={disabled}
			value={value}
			onChange={handleChange}
			color='primary'>
			{bills.map((bill) => (
				<ToggleButton key={bill} value={bill}>
					${bill.toLocaleString()}
				</ToggleButton>
			))}
		</ToggleButtonGroup>
	);
};

export default Bills;

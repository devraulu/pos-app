import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface FilterSelectProps {
	name: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	options: Record<string, string>;
}

const FilterSelect: React.FunctionComponent<FilterSelectProps> = ({
	name,
	value: select,
	setValue: setSelect,
	options,
}) => {
	return (
		<FormControl variant='standard' sx={{ minWidth: 120 }}>
			<InputLabel id={`${name}-label`}>{name}</InputLabel>
			<Select
				labelId={`${name}-label`}
				id={`${name}-select`}
				value={select}
				onChange={(e) => setSelect(e.target.value)}
				label={`${name}`}>
				{Object.keys(options).map((key) => (
					<MenuItem key={key} value={key}>
						{options[key as keyof typeof options]}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FilterSelect;


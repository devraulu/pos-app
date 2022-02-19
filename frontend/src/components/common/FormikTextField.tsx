import { Field, useFormikContext } from 'formik';

import { Product } from '../../models';
import { TextField } from '@mui/material';

type Props = {
	name: string;
	label: string;
};

export default function FormikTextField({ name, label }: Props) {
	const { values, handleChange, errors, touched } = useFormikContext();
	return (
		<TextField
			id={name}
			name={name}
			label={label}
			value={(values as Product)[name as keyof Product]}
			onChange={handleChange}
			error={touched[name] && Boolean(errors[name])}
			helperText={touched[name] && errors[name]}
		/>
	);
}

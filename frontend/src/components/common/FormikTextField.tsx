import { Client, Product } from 'models';
import { Field, useFormikContext } from 'formik';

import { TextField } from '@mui/material';

type Props = {
	name: string;
	label: string;
	type?: string;
};

export default function FormikTextField({ name, label, type = 'text' }: Props) {
	const { values, handleChange, handleBlur, errors, touched } =
		useFormikContext<any>();

	return (
		<TextField
			id={name}
			name={name}
			label={label}
			type={type}
			value={(values as Product)[name as keyof Product]}
			onChange={handleChange}
			onBlur={handleBlur}
			error={touched[name] && Boolean(errors[name])}
			helperText={touched[name] && errors[name]}
		/>
	);
}

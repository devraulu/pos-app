import { Client, IProduct } from 'models';
import { Field, useFormikContext } from 'formik';
import { TextField, TextFieldProps } from '@mui/material';

type Props = {
	name: string;
	label: string;
	type?: string;
} & TextFieldProps;

export default function FormikTextField({
	name,
	label,
	type = 'text',
	...rest
}: Props) {
	const { values, handleChange, handleBlur, errors, touched } =
		useFormikContext<any>();

	return (
		<TextField
			id={name}
			name={name}
			label={label}
			type={type}
			value={(values as IProduct)[name as keyof IProduct]}
			onChange={handleChange}
			onBlur={handleBlur}
			error={touched[name] && Boolean(errors[name])}
			helperText={touched[name] && errors[name]}
			InputLabelProps={{
				shrink: !!(values as IProduct)[name as keyof IProduct],
			}}
			{...rest}
		/>
	);
}


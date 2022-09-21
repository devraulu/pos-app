import { TextField, TextFieldProps } from '@mui/material';
import { useFormikContext } from 'formik';
import { IProduct } from 'models';

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

// export function FormikInputText(props) {
// 	const { field, meta, helpers } = useField(props.name);

// 	return <InputText {...field} {...props} {...meta} {...helpers} />;
// }


import { Field } from 'formik';

type Props = {
	name: string | null;
	label: string | null;
	errors: Record<string, unknown>;
	touched: Record<string, unknown>;
};

export default function FieldWithErrors({
	name,
	label,
	errors,
	touched,
}: Props) {
	return (
		<div className=' mt-8 first:mt-0'>
			<label htmlFor={name || ''}>{label}</label>
			<Field name={name} />
			{errors[name as keyof typeof errors] &&
			touched[name as keyof typeof touched] ? (
				<div className='error-text'>
					{errors[name as keyof typeof errors] as string}
				</div>
			) : null}
		</div>
	);
}

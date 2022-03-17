import FormikTextField from 'components/common/FormikTextField';

interface UserFormCommonFieldsProps {}

const UserCommonFormFields: React.FunctionComponent<
	UserFormCommonFieldsProps
> = () => {
	return (
		<>
			<FormikTextField name='displayName' label='Nombre' />
			<FormikTextField name='email' label='Email' type='email' />
		</>
	);
};

export default UserCommonFormFields;

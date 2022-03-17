import { Box, Button, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

import FormikTextField from 'components/common/FormikTextField';
import { ILogin } from 'models';
import { LoginSchema } from 'schemas';

interface LoginFormProps {
	onSubmit: (values: ILogin) => void;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({ onSubmit }) => {
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				onSubmit(values);
				setSubmitting(false);
			}}
			validationSchema={LoginSchema}>
			{({ isValid, submitForm, isSubmitting }) => (
				<Form>
					<Box sx={{ width: '50%', margin: '0 auto', textAlign: 'center' }}>
						<Typography variant='h1' component={'h1'}>
							Iniciar sesión
						</Typography>
						<Typography variant='body1'>
							Inicie sesión con su cuenta de correo electrónico y contraseña.
						</Typography>
						<FormikTextField
							fullWidth
							name='email'
							label='Email'
							type='email'
							sx={{ mt: 5 }}
						/>
						<FormikTextField
							fullWidth
							name='password'
							label='Password'
							type='password'
							sx={{ mt: 3 }}
						/>
						<Button
							disabled={!isValid || isSubmitting}
							fullWidth
							variant='contained'
							size='large'
							color='secondary'
							type='submit'
							sx={{ mt: 3 }}>
							Login
						</Button>
						<Typography variant='body2' sx={{ textAlign: 'left', mt: 2 }}>
							Si necesita una cuenta o&nbsp;
							<strong>ha olvidado su contraseña</strong>, comuníquese con
							su&nbsp;
							<strong>supervisor</strong>.
						</Typography>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;

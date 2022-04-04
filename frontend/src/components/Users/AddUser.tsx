import { Box, Button, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';

import { User } from 'firebase/auth';
import UserCommonFormFields from './UserCommonFormFields';
import { css } from '@emotion/react';
import { httpsCallable } from 'firebase/functions';
import { toast } from 'react-toastify';
import { useFunctions } from 'reactfire';

export default function AddUser() {
	const functions = useFunctions();

	const createUser = httpsCallable(functions, 'createUser');
	const handleSubmit = async (
		values: User,
		{ setSubmitting, resetForm }: FormikHelpers<User>
	) => {
		try {
			await createUser({ ...values });
			toast.success('Se guardo el cliente correctamente');
			resetForm();
		} catch (e) {
			resetForm();
			toast.error('Error guardando el cliente');
		} finally {
			setSubmitting(false);
		}
	};
	return (
		<Box sx={{ p: 5 }}>
			<Typography variant='h2' noWrap>
				Agregar cliente
			</Typography>
			<Box sx={{ mt: 3 }}>
				<Formik initialValues={{} as User} onSubmit={handleSubmit}>
					{({ isValid, submitForm, isSubmitting }) => (
						<Form
							css={css`
								display: flex;
								flex-direction: column;
								gap: 20px;
								width: 50%;
							`}>
							<UserCommonFormFields />
							<Button
								disabled={!isValid || isSubmitting}
								variant='contained'
								size='large'
								onClick={submitForm}>
								Agregar
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
		</Box>
	);
}


import { Box, Button, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import FormikTextField from '../common/FormikTextField';
import { css } from '@emotion/react';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { User } from '../../models';
import { UserSchema } from '../../schemas';
import { formatClient } from 'utils';

export default function AddUsers() {
	const handleSubmit = async (
		values: User,
		{ setSubmitting, resetForm }: FormikHelpers<User>
	) => {
		try {
			const docRef = await addDoc(
				collection(db, 'Users'),
				formatClient(values)
			);
			console.log('docRef:', docRef);
			toast.success('Se guardo el usuario correctamente');
			resetForm();
		} catch (e) {
			console.log(e);
			resetForm();
			toast.error('Error guardando el usuario');
		} finally {
			setSubmitting(false);
		}
	};
	return (
		<Box sx={{ p: 5 }}>
			<Typography variant='h2' noWrap>
				Agregar Usuario
			</Typography>
			<Box sx={{ mt: 3 }}>
				<Formik
					initialValues={{} as User}
					onSubmit={handleSubmit}
					validationSchema={UserSchema}>
					{({ isValid, submitForm, isSubmitting }) => (
						<Form
							css={css`
								display: flex;
								flex-direction: column;
								gap: 20px;
								width: 50%;
							`}>
							<FormikTextField name='user_name' label='Nombre de usuario' />
							<FormikTextField name='name' label='Nombre Completo'/>
							<FormikTextField name='phone' label='Numero de telefono' />
							<FormikTextField name='email' label='Email' type='email' />
							{/* faltan los checkbox de genero */}
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

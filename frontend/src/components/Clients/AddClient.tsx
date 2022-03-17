import { Box, Button, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { Client } from 'models';
import { ClientSchema } from 'schemas';
import FormikTextField from 'components/common/FormikTextField';
import { css } from '@emotion/react';
import { db } from 'firebase-config';
import { formatClient } from 'utils';
import { toast } from 'react-toastify';

export default function AddClient() {
	const handleSubmit = async (
		values: Client,
		{ setSubmitting, resetForm }: FormikHelpers<Client>
	) => {
		try {
			const docRef = await addDoc(
				collection(db, 'clients'),
				formatClient(values)
			);
			console.log('docRef:', docRef);
			toast.success('Se guardo el cliente correctamente');
			resetForm();
		} catch (e) {
			console.log(e);
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
				<Formik
					initialValues={{} as Client}
					onSubmit={handleSubmit}
					validationSchema={ClientSchema}>
					{({ isValid, submitForm, isSubmitting }) => (
						<Form
							css={css`
								display: flex;
								flex-direction: column;
								gap: 20px;
								width: 50%;
							`}>
							<FormikTextField name='name' label='Nombre de la compañía' />
							<FormikTextField name='email' label='Email' type='email' />
							<FormikTextField name='phone' label='Teléfono' />
							<FormikTextField name='rnc' label='RNC' type='number' />
							<FormikTextField name='address' label='Dirección' />
							<FormikTextField name='credit_limit' label='Límite de crédito' />
							<FormikTextField name='balance' label='Balance' />
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

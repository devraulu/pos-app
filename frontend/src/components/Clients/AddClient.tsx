import { Box, Button, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { Client } from 'models';
import { ClientSchema } from 'schemas';
import FormikTextField from 'components/common/FormikTextField';
import { css } from '@emotion/react';
import { formatClient } from 'utils';
import { toast } from 'react-toastify';
import ClientsFormFields from './ClientsFormFields';
import { useFirestore } from 'reactfire';

export default function AddClient() {
	const db = useFirestore();

	const handleSubmit = async (
		values: Client,
		{ setSubmitting, resetForm }: FormikHelpers<Client>
	) => {
		try {
			const docRef = await addDoc(
				collection(db, 'clients'),
				formatClient({ ...values, createdAt: serverTimestamp() })
			);
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
							<ClientsFormFields />
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


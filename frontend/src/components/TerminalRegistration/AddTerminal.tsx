import { Box, Button, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import FormikTextField from '../common/FormikTextField';
import { css } from '@emotion/react';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { Terminal } from '../../models';
import { TerminalSchema } from '../../schemas';
import { formatClient } from 'utils';

export default function AddUsers() {
	const handleSubmit = async (
		values: Terminal,
		{ setSubmitting, resetForm }: FormikHelpers<Terminal>
	) => {
		try {
			const docRef = await addDoc(
				collection(db, 'Terminals'),
				formatClient(values)
			);
			console.log('docRef:', docRef);
			toast.success('Se guardo el Terminal correctamente');
			resetForm();
		} catch (e) {
			console.log(e);
			resetForm();
			toast.error('Error guardando el Terminal');
		} finally {
			setSubmitting(false);
		}
	};
	return (
		<Box sx={{ p: 5 }}>
			<Typography variant='h2' noWrap>
				Agregar Terminal
			</Typography>
			<Box sx={{ mt: 3 }}>
				<Formik
					initialValues={{} as Terminal}
					onSubmit={handleSubmit}
					validationSchema={TerminalSchema}>
					{({ isValid, submitForm, isSubmitting }) => (
						<Form
							css={css`
								display: flex;
								flex-direction: column;
								gap: 20px;
								width: 50%;
							`}>
						
							<FormikTextField name='name' label='Nombre del terminal'/>
							<FormikTextField name='terminal_number' label='Numero de terminal' />
							<FormikTextField name='user' label='Nombre del usuario de terminal'/>
							
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

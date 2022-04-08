import { Box, Button, Skeleton, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { doc, updateDoc } from 'firebase/firestore';
import { formatClient } from 'utils';
import { useEffect, useState } from 'react';

import { Client } from 'models';
import { ClientSchema } from 'schemas';
import FormikTextField from 'components/common/FormikTextField';
import { css } from '@emotion/react';
import { toast } from 'react-toastify';
import ClientsFormFields from './ClientsFormFields';
import { useFirestore } from 'reactfire';
import { useDB } from 'hooks/firebase';

type Props = { id: string };

export default function EditClient({ id }: Props) {
	const { db, getDocByID } = useDB();

	const [client, setClient] = useState<null | Client>(null);
	const [error, setError] = useState<null | string>(null);

	const getClient = async () => {
		try {
			const data = await getDocByID(id, 'clients');
			setClient(data as Client);
		} catch (e) {
			setError((e as Error).message);
		}
	};

	useEffect(() => {
		getClient();
	}, []);

	return (
		<Box sx={{ p: 5 }}>
			<Typography variant='h2' noWrap>
				Edit client
			</Typography>

			{!client && !error && (
				<Box
					css={css`
						width: 50%;
					`}>
					<Skeleton height={100} />
					<Skeleton height={100} />
					<Skeleton height={100} />
					<Skeleton height={100} />
					<Skeleton height={80} />
				</Box>
			)}
			{error && (
				<Box
					sx={{
						mt: 4,
						width: '50%',
						border: 1,
						borderRadius: 2,
						borderColor: 'error.main',
						p: 2,
					}}>
					<Typography variant='h3' color='error'>
						Error
					</Typography>
					<Typography variant='body1' sx={{ mt: 1 }}>
						{error}
					</Typography>
				</Box>
			)}
			{client && !error && (
				<Box sx={{ mt: 3 }}>
					<Formik
						initialValues={client || ({} as Client)}
						onSubmit={async (values, { setSubmitting, resetForm }) => {
							try {
								const docRef = await updateDoc(
									doc(db, 'clients', id),
									formatClient(values)
								);
								toast.success('Se guardo el producto correctamente');
							} catch (e) {
								resetForm();
								toast.error('Error guardando el producto');
							} finally {
								setSubmitting(false);
							}
						}}
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
									Actualizar
								</Button>
							</Form>
						)}
					</Formik>
				</Box>
			)}
		</Box>
	);
}


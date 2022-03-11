import { Box, Button, Skeleton, Typography } from '@mui/material';
import { UserSchema, ProductSchema } from 'schemas';
import { Form, Formik } from 'formik';
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { formatClient, getDocByID } from 'utils';
import { useEffect, useState } from 'react';

import { User } from 'models';
import FormikTextField from 'components/common/FormikTextField';
import { css } from '@emotion/react';
import { db } from 'firebase';
import { toast } from 'react-toastify';

type Props = { id: string };

export default function EditUser({ id }: Props) {
	const [user, setUser] = useState<null | User>(null);
	const [error, setError] = useState<null | string>(null);

	const getUser = async () => {
		try {
			const data = await getDocByID(id, 'Users');
			setUser(data);
		} catch (e) {
			setError((e as Error).message);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<Box sx={{ p: 5 }}>
			<Typography variant='h2' noWrap>
				Edit User
			</Typography>

			{!user && !error && (
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
			{user && !error && (
				<Box sx={{ mt: 3 }}>
					<Formik
						initialValues={user || ({} as User)}
						onSubmit={async (values, { setSubmitting, resetForm }) => {
							try {
								const docRef = await updateDoc(
									doc(db, 'Users', id),
									formatClient(values)
								);
								console.log('docRef:', docRef);
								toast.success('Se guardo el producto correctamente');
							} catch (e) {
								resetForm();
								toast.error('Error guardando el producto');
							} finally {
								setSubmitting(false);
							}
						}}
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
								<FormikTextField name='name' label='Nombre Completo' />
								<FormikTextField name='cell_phone_number' label='Numero de telefono' />
								<FormikTextField name='email' label='Email' type='email' />
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

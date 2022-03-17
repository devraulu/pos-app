import { Box, Button, Skeleton, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

import { User } from 'firebase/auth';
import UserCommonFormFields from './UserCommonFormFields';
import { css } from '@emotion/react';
import { httpsCallable } from 'firebase/functions';
import { toast } from 'react-toastify';
import { useFunctions } from 'reactfire';
import useUser from 'hooks/firebase/useUser';

type Props = { uid: string };

export default function EditUser({ uid }: Props) {
	const { user, error } = useUser(uid);

	const functions = useFunctions();
	const updateUser = httpsCallable(functions, 'updateUser');

	return (
		<Box sx={{ p: 5 }}>
			<Typography variant='h2' noWrap>
				Edit user
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
						onSubmit={async (
							{ email, displayName, uid },
							{ setSubmitting, resetForm }
						) => {
							try {
								const res = await updateUser({
									email,
									displayName,
									uid,
								});
								res && toast.success('Se guardo el usuario correctamente');
							} catch (e) {
								resetForm();
								toast.error('Error guardando el usuario');
							} finally {
								setSubmitting(false);
							}
						}}>
						{({ isValid, submitForm, isSubmitting }) => (
							<Form
								css={css`
									display: flex;
									flex-direction: column;
									gap: 20px;
									width: 50%;
								`}>
								<UserCommonFormFields />
								{/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Box>
										<Typography>Email verified: </Typography>
										<Typography>{user.emailVerified ? 'YES' : 'NO'}</Typography>
									</Box>
									<Button
										variant='contained'
										color='secondary'
										size='small'
										sx={{ ml: 2 }}
onClick={()=>}
>
										Send verification email
									</Button>
								</Box> */}
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

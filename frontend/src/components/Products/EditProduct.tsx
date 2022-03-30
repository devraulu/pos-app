import { Box, Button, Skeleton, Typography } from '@mui/material';
import { Form, Formik, FormikValues } from 'formik';
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { formatProduct, getDocByID } from 'utils';
import { useEffect, useState } from 'react';

import FormikTextField from 'components/common/FormikTextField';
import { IProduct } from 'models';
import { ProductSchema } from 'schemas';
import { css } from '@emotion/react';
import { db } from 'firebase-config';
import { toast } from 'react-toastify';
import BarcodeScanner from './BarcodeScanner';
import ProductFormFields from './ProductFormFields';

type Props = { id: string };

export default function EditProduct({ id }: Props) {
	const [product, setProduct] = useState<null | IProduct>(null);
	const [error, setError] = useState<null | string>(null);

	const getProduct = async () => {
		try {
			const data = await getDocByID(id);
			setProduct(data as IProduct);
		} catch (e) {
			setError((e as Error).message);
		}
	};

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<Box sx={{ p: 5 }}>
			<Typography variant='h2' noWrap>
				Editar producto
			</Typography>

			{!product && !error && (
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
			{product && !error && (
				<Box sx={{ mt: 3 }}>
					<Formik
						initialValues={product || ({} as IProduct)}
						onSubmit={async (values, { setSubmitting, resetForm }) => {
							try {
								const docRef = await updateDoc(
									doc(db, 'products', id),
									formatProduct(values)
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
						validationSchema={ProductSchema}>
						{({ isValid, submitForm, isSubmitting }) => (
							<Form
								css={css`
									display: flex;
									flex-direction: column;
									gap: 20px;
									width: 50%;
								`}>
								<ProductFormFields />
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
			)}
		</Box>
	);
}


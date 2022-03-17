import { Box, Button, Skeleton, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	setDoc,
} from 'firebase/firestore';

import FormikTextField from 'components/common/FormikTextField';
import { IProduct } from 'models';
import { ProductSchema } from 'schemas';
import { css } from '@emotion/react';
import { db } from 'firebase-config';
import { formatProduct } from 'utils';
import { toast } from 'react-toastify';

export default function AddProduct() {
	const handleSubmit = async (
		values: IProduct,
		{ setSubmitting, resetForm }: FormikHelpers<IProduct>
	) => {
		try {
			const docRef = await addDoc(
				collection(db, 'products'),
				formatProduct(values)
			);
			console.log('docRef:', docRef);
			toast.success('Se guardo el producto correctamente');
			resetForm();
		} catch (e) {
			console.log(e);
			resetForm();
			toast.error('Error guardando el producto');
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Box sx={{ p: 5 }}>
			<Typography variant='h2' noWrap>
				Agregar producto
			</Typography>
			<Box sx={{ mt: 3 }}>
				<Formik
					initialValues={
						{
							category: 'Action',
							name: 'Earthquake2',
							price: 46783.12,
							deleted: true,
							img: 'http://dummyimage.com/146x100.png/dddddd/000000',
						} as IProduct
					}
					onSubmit={handleSubmit}
					validationSchema={ProductSchema}>
					{({ isValid, submitForm, isSubmitting }) => (
						<Form
							css={css`
								display: flex;
								flex-direction: column;
								gap: 20px;
								width: 50%;
							`}>
							<FormikTextField name='name' label='Nombre' />
							<FormikTextField name='price' label='Precio' />
							<FormikTextField name='category' label='Categoria' />
							<FormikTextField name='img' label='Imagen del producto' />
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

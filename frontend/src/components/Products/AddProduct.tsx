import { Box, Button, Skeleton, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	setDoc,
} from 'firebase/firestore';

import FormikTextField from '../common/FormikTextField';
import { Product } from '../../models';
import { ProductSchema } from '../../schemas';
import { css } from '@emotion/react';
import { db } from '../../firebase';
import { toast } from 'react-toastify';

export default function AddProduct() {
	const handleSubmit = async (
		values: Product,
		{ setSubmitting, resetForm }: FormikHelpers<Product>
	) => {
		if (!values.img)
			values.img =
				'https://via.placeholder.com/150/000000/FFFFFF/?text=' + values.name;
		try {
			const docRef = await addDoc(collection(db, 'products'), {
				...values,
				category: values.category.toUpperCase(),
				name: values.name.toUpperCase(),
				createdAt: serverTimestamp(),
				updatedAt: serverTimestamp(),
			});
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
				Add product
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
						} as Product
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

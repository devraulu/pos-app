import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Field, Form, Formik } from 'formik';
import { db } from '../../firebase';
import { Product } from '../../models';
import * as yup from 'yup';
import './AddProduct.styles.scss';
import FieldWithErrors from '../FieldWithErrors';
import { toast } from 'react-toastify';

const AddProductSchema = yup.object().shape({
	name: yup.string().min(4, 'Too short').max(100, 'Too long').required(),
	price: yup.number().positive().required(),
	img: yup.string().url(),
	category: yup.string().min(4, 'Too short').max(100, 'Too long').required(),
});

export default function AddProduct() {
	// const handleSubmit = async (data: Product) => { };

	return (
		<div className='container'>
			<h1 className='text-2xl'>Agregar producto</h1>
			<Formik
				initialValues={
					{
						name: 'Samsung Note9',
						category: 'Electronicos',
						price: 600.5,
					} as Product
				}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					if (!values.img)
						values.img =
							'https://via.placeholder.com/150/000000/FFFFFF/?text=' +
							values.name;
					console.log('values: ', values);
					try {
						const docRef =
							(await addDoc(collection(db, 'products'), {
								...values,
								category: values.category.toUpperCase(),
								name: values.name.toUpperCase(),
							})) != null;
						docRef && toast.success('Se guardo el producto correctamente');
					} catch (e) {
						resetForm();
						toast.error('Error guardando el producto');
					}
				}}
				validationSchema={AddProductSchema}>
				{({ errors, touched }) => (
					<Form className='m-8'>
						<FieldWithErrors
							name='name'
							label='Nombre'
							errors={errors}
							touched={touched}
						/>
						<FieldWithErrors
							name='price'
							label='Precio'
							errors={errors}
							touched={touched}
						/>
						<FieldWithErrors
							name='category'
							label='Categoria'
							errors={errors}
							touched={touched}
						/>
						<FieldWithErrors
							name='img'
							label='Imagen del producto'
							errors={errors}
							touched={touched}
						/>
						<button
							className='px-4 py-2 bg-purple-500 text-white rounded text-lg mt-8'
							type='submit'>
							Agregar
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

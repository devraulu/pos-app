import * as yup from 'yup';

export const ProductSchema = yup.object().shape({
	name: yup
		.string()
		.min(4, 'Muy corto')
		.max(100, 'Muy largo')
		.required('El nombre es requerido'),
	price: yup.number().positive().required('El precio es requerido'),
	img: yup.string().url('La url de la imagen no es valida'),
	category: yup
		.string()
		.min(4, 'Muy corto')
		.max(100, 'Muy largo')
		.required('La categoria es requerida'),
	code: yup.string().required('El codigo de barras es requerido'),
});

const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
const numberOnlyRegex = /^[0-9]*$/;
export const ClientSchema = yup.object().shape({
	name: yup
		.string()
		.min(4, 'Muy corto')
		.max(100, 'Muy largo')
		.required('El nombre es requerido'),
	email: yup.string().email().required('El email es requerido'),
	phone: yup
		.string()
		.matches(phoneRegExp, 'No es un teléfono válido')
		.required('El teléfono es requerido'),
	address: yup
		.string()
		.min(10, 'Muy corto')
		.max(100, 'Muy largo')
		.required('La dirección es requerida'),
	cardCode: yup
		.string()
		.matches(numberOnlyRegex, 'No es un codigo valido')
		.required('El número de tarjeta de códigos es requerido'),
	visits: yup.number().positive(),
	points: yup.number().positive(),
});

export const LoginSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required(),
});


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
});

const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

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
	rnc: yup.string().matches(/[0-9]/).min(10, 'Muy corto').max(10, 'Muy largo'),
	address: yup
		.string()
		.min(10, 'Muy corto')
		.max(100, 'Muy largo')
		.required('La dirección es requerida'),
	credit_limit: yup
		.number()
		.positive('Debe ser un número positivo')
		.min(5000, 'Debe ser mayor a {0}')
		.max(500000, 'Debe ser menor a {0}')
		.required('El límite de crédito es requerido'),
	balance: yup.number().required('El saldo es requerido'),
});

const client = {
	name: 'Blanda, Casper and Thompson',
	email: 'cseston1@bravesites.com',
	rnc: '7268089538',
	address: '82785 Barby Terrace',
	credit_limit: 489093.02,
	balance: 239302.19,
	deleted: false,
	createdAt: '1632541515000',
	updatedAt: '1627944112000',
	phone: '+86 (183) 111-7411',
};

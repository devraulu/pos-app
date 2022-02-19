import * as yup from 'yup';

export const ProductSchema = yup.object().shape({
	name: yup.string().min(4, 'Too short').max(100, 'Too long').required(),
	price: yup.number().positive().required(),
	img: yup.string().url(),
	category: yup.string().min(4, 'Too short').max(100, 'Too long').required(),
});


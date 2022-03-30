import FormikTextField from 'components/common/FormikTextField';
import BarcodeScanner from './BarcodeScanner';

interface ProductFormFieldsProps {}

const ProductFormFields: React.FunctionComponent<
	ProductFormFieldsProps
> = () => {
	return (
		<>
			<FormikTextField name='name' label='Nombre' />
			<FormikTextField name='price' label='Precio' />
			<FormikTextField name='category' label='Categoria' />
			<FormikTextField name='img' label='Imagen del producto' />
			<FormikTextField
				name='code'
				label='Codigo de barras'
				InputProps={{ endAdornment: <BarcodeScanner /> }}
			/>
		</>
	);
};

export default ProductFormFields;


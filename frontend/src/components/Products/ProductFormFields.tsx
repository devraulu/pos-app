import { Box } from '@mui/material';
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
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<FormikTextField fullWidth name='code' label='Codigo de barras' />
				<Box ml={2}>
					<BarcodeScanner />
				</Box>
			</Box>
		</>
	);
};

export default ProductFormFields;


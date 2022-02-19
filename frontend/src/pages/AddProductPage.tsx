import AddProduct from '../components/Products/AddProduct';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}

export default function AddProductPage({}: Props) {
	return <AddProduct />;
}

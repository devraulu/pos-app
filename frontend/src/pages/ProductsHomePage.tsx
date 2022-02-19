import Products from '../components/Products';
import { RouteComponentProps } from '@reach/router';

type Props = {} & RouteComponentProps;

export default function ProductsHomePage({}: Props) {
	return <Products />;
}

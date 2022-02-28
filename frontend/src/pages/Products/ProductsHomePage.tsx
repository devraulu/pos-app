import Products from 'components/Products';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}

export default function ProductsHomePage({}: Props) {
	return <Products />;
}

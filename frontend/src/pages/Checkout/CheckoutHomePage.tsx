import Checkout from 'components/Checkout';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}

export default function CheckoutHomePage({}: Props) {
	return <Checkout />;
}

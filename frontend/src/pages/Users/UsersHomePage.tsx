import Clients from 'components/Clients';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}

export default function ClientsHomePage({}: Props) {
	return <Clients />;
}

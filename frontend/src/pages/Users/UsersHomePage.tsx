import Clients from 'components/Clients';
import { RouteComponentProps } from '@reach/router';
import Users from 'components/Users';

interface Props extends RouteComponentProps {}

export default function UsersHomePage({}: Props) {
	return <Users />;
}

import Users from 'components/Users';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}

export default function UsersHomePage({}: Props) {
	return <Users />;
}

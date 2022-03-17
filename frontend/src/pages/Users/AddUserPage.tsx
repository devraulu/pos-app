import AddClient from 'components/Clients/AddClient';
import AddUser from 'components/Users/AddUser';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}

export default function AddUserPage({}: Props) {
	return <AddUser />;
}

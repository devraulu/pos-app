import { RouteComponentProps } from '@reach/router';
import AddUser from 'components/Users/AddUsers';

interface Props extends RouteComponentProps {}

export default function AddClientPage({}: Props) {
	return <AddUser />;
}

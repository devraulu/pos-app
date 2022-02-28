import { RouteComponentProps } from '@reach/router';
import AddClient from 'components/Clients/AddClient';

interface Props extends RouteComponentProps {}

export default function AddClientPage({}: Props) {
	return <AddClient />;
}

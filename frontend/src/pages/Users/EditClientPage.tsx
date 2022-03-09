import { RouteComponentProps, useParams } from '@reach/router';
import EditClient from 'components/Clients/EditClient';

interface Props extends RouteComponentProps {}

export default function EditClientPage({}: Props) {
	const { id } = useParams();

	return <EditClient id={id} />;
}

import { RouteComponentProps, useParams } from '@reach/router';
import EditUser from 'components/Users/EditUsers';

interface Props extends RouteComponentProps {}

export default function EditClientPage({}: Props) {
	const { id } = useParams();

	return <EditUser id={id} />;
}

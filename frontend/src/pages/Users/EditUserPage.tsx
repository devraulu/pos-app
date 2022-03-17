import { RouteComponentProps, useParams } from '@reach/router';

import EditUser from 'components/Users/EditUser';

interface Props extends RouteComponentProps {}

export default function EditUserPage({}: Props) {
	const { id } = useParams();

	return <EditUser uid={id} />;
}

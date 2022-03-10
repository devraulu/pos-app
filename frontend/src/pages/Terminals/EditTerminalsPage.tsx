import { RouteComponentProps, useParams } from '@reach/router';
import EditTerminal from 'components/TerminalRegistration/EditTerminal';

interface Props extends RouteComponentProps {}

export default function EditTerminalPage({}: Props) {
	const { id } = useParams();

	return <EditTerminal id={id} />;
}

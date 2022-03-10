import { RouteComponentProps } from '@reach/router';
import AddTerminal from 'components/TerminalRegistration/AddTerminal';

interface Props extends RouteComponentProps {}

export default function AddTerminalPage({}: Props) {
	return <AddTerminal />;
}

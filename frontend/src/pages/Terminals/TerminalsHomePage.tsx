import Terminals from 'components/TerminalRegistration';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}

export default function TerminalsHomePage({}: Props) {
	return <Terminals />;
}

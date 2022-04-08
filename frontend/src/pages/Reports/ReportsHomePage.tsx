import { RouteComponentProps } from '@reach/router';
import Reports from 'components/Reports';

interface Props extends RouteComponentProps {}

export default function ReportsHomePage({}: Props) {
	return <Reports />;
}


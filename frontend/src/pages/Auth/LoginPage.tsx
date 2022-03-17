import Login from 'components/Auth/Login';
import { RouteComponentProps } from '@reach/router';

interface LoginPageProps extends RouteComponentProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
	return <Login />;
};

export default LoginPage;

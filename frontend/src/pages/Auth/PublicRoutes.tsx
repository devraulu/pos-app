import { Redirect, Router } from '@reach/router';

import Home from 'pages/Home';
import LoginPage from './LoginPage';

interface PublicRoutesProps {}

const PublicRoutes: React.FunctionComponent<PublicRoutesProps> = () => {
	return (
		<Router>
			<LoginPage path='login' />
			<Home path='/' />
			<Redirect from='*' to='/login' noThrow />
		</Router>
	);
};
export default PublicRoutes;

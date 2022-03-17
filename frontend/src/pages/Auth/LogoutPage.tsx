import { RouteComponentProps, navigate } from '@reach/router';
import { getAuth, signOut } from 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

import { toast } from 'react-toastify';
import { useEffect } from 'react';

interface LogoutPageProps extends RouteComponentProps {}

const LogoutPage: React.FunctionComponent<LogoutPageProps> = () => {
	const app = useFirebaseApp();
	const auth = getAuth(app);
	const { data: user } = useUser();

	const logOutUser = async () => {
		try {
			await signOut(auth);
			navigate('/login');
			toast.info("You've been logged out!");
			console.log('User after sign out', user);
		} catch (error: unknown) {
			console.log('Error', error);
			toast.error('Error' + (error as Error).message);
		}
	};

	useEffect(() => {
		logOutUser();
	}, []);
	return <></>;
};

export default LogoutPage;

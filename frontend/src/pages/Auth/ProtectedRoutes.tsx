import { navigate } from '@reach/router';
import { useEffect } from 'react';
import { useSigninCheck } from 'reactfire';

interface ProtectedRoutesProps {}

const ProtectedRoutes: React.FunctionComponent<ProtectedRoutesProps> = ({
	children,
}) => {
	const { status: isSignedInStatus, data: signinCheck } = useSigninCheck();
	const { signedIn } = signinCheck || {};
	useEffect(() => {
		!signedIn && navigate('/');
	}, []);

	return signedIn ? <>{children}</> : <></>;
};
export default ProtectedRoutes;

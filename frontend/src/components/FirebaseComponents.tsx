import { AuthProvider, useFirebaseApp } from 'reactfire';

import { getAuth } from 'firebase/auth';

interface FirebaseComponentsProps {}

const FirebaseComponents: React.FunctionComponent<FirebaseComponentsProps> = ({
	children,
}) => {
	const app = useFirebaseApp();
	const auth = getAuth(app);

	return <AuthProvider sdk={auth}>{children}</AuthProvider>;
};

export default FirebaseComponents;

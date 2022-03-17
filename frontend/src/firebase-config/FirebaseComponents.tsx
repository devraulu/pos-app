import { AuthProvider, FunctionsProvider, useFirebaseApp } from 'reactfire';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import {
	connectFunctionsEmulator,
	getFunctions,
	httpsCallable,
} from 'firebase/functions';

import { Button } from '@mui/material';

interface FirebaseComponentsProps {}

const FirebaseComponents: React.FunctionComponent<FirebaseComponentsProps> = ({
	children,
}) => {
	const app = useFirebaseApp();
	const auth = getAuth(app);
	const functions = getFunctions(app);
	const db = getFirestore();

	if (process.env.NODE_ENV !== 'production') {
		// connectFunctionsEmulator(functions, 'localhost', 5001);
		// connectAuthEmulator(auth, 'http://localhost:9099');
		// connectFirestoreEmulator(db, 'localhost', 8080);
	}

	return (
		<FunctionsProvider sdk={functions}>
			<AuthProvider sdk={auth}>{children}</AuthProvider>
		</FunctionsProvider>
	);
};

export default FirebaseComponents;

import {
	AppCheckProvider,
	AuthProvider,
	FirestoreProvider,
	FunctionsProvider,
	useFirebaseApp,
} from 'reactfire';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

interface FirebaseComponentsProps {}

const FirebaseComponents: React.FunctionComponent<FirebaseComponentsProps> = ({
	children,
}) => {
	const app = useFirebaseApp();

	const auth = getAuth(app);
	const functions = getFunctions(app);
	const db = getFirestore(app);

	if (process.env.NODE_ENV !== 'production') {
		// connectFunctionsEmulator(functions, 'localhost', 5001);
		// connectAuthEmulator(auth, 'http://localhost:9099');
		// connectFirestoreEmulator(db, 'localhost', 8080);
	}
	const appCheck = initializeAppCheck(app, {
		provider: new ReCaptchaV3Provider(
			'6LfuLzUfAAAAAN8l156dswfgyBM9TrhBvoVEVBjZ'
		),
		isTokenAutoRefreshEnabled: true,
	});

	return (
		<AppCheckProvider sdk={appCheck}>
			<FirestoreProvider sdk={db}>
				<FunctionsProvider sdk={functions}>
					<AuthProvider sdk={auth}>{children}</AuthProvider>
				</FunctionsProvider>
			</FirestoreProvider>
		</AppCheckProvider>
	);
};

export default FirebaseComponents;


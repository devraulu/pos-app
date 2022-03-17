import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

import { ILogin } from 'models';
import { app } from 'firebase-config';

export const auth = getAuth(app);

export const signIn = async ({ email, password }: ILogin) =>
	signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => signOut(auth);

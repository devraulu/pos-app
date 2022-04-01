import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY + '',
	authDomain: 'pos-app-1ad0d.firebaseapp.com',
	projectId: 'pos-app-1ad0d',
	storageBucket: 'pos-app-1ad0d.appspot.com',
	messagingSenderId: '154688244627',
	appId: '1:154688244627:web:4dcd523767362b997d3666',
};

// console.log('firebaseConfig:', firebaseConfig);

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);


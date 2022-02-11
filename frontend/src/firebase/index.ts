// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.FIREBASE_API_KEY as string,
	authDomain: 'pos-app-1ad0d.firebaseapp.com',
	projectId: 'pos-app-1ad0d',
	storageBucket: 'pos-app-1ad0d.appspot.com',
	messagingSenderId: '154688244627',
	appId: '1:154688244627:web:d89a521ee33138227d3666',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

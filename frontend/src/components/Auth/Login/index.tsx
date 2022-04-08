import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { Box } from '@mui/material';
import { ILogin } from 'models';
import LoginForm from './LoginForm';
import { navigate } from '@reach/router';
import { toast } from 'react-toastify';
import { useFirebaseApp } from 'reactfire';

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
	const app = useFirebaseApp();
	const auth = getAuth(app);

	const handleSubmit = async ({ email, password }: ILogin) => {
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			if (user) {
				navigate('/');
				toast.success('Bienvenido');
			}
		} catch (error: unknown) {
			const { code, message } = error as { code: string; message: string };
			switch (code) {
				case 'auth/user-not-found':
					toast.error('El usuario no existe');
					break;
				case 'auth/wrong-password':
					toast.error('Contraseña incorrecta');
					break;
				default:
					toast.error(message);
			}
		}
	};
	return (
		<Box py={4}>
			<LoginForm onSubmit={handleSubmit} />
		</Box>
	);
};

export default Login;


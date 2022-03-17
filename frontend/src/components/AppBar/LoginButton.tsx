import { Box, Button } from '@mui/material';

interface LoginButtonProps {}

const LoginButton: React.FunctionComponent<LoginButtonProps> = () => {
	return (
		<Button variant='contained' color='secondary' href='/login'>
			Login
		</Button>
	);
};

export default LoginButton;

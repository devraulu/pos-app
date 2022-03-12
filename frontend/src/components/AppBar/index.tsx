import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';

import CheckoutButton from './CheckoutButton';
import LoginButton from './LoginButton';
import UserMenu from './UserMenu';
import { css } from '@emotion/react';
import { useSigninCheck } from 'reactfire';

const pages = [
	{ name: 'Productos', path: '/products' },
	{ name: 'Pedidos', path: '/orders' },
	{ name: 'Clientes', path: '/clients' },
];

export default function POSAppBar() {
	const {
		data: { signedIn },
	} = useSigninCheck();

	return (
		<AppBar position='sticky'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography variant='h2' noWrap>
						POS
					</Typography>
					<Box sx={{ flexGrow: 1, ml: 2 }}>
						{pages.map(({ name, path }, i) => (
							<Button
								key={path}
								href={path}
								variant='text'
								css={css`
									color: lightgray;
									margin-left: 10px;
									&:first-of-type {
										margin-left: 0;
									}
								`}>
								{name}
							</Button>
						))}
					</Box>

					{signedIn ? (
						<>
							<Box>
								<CheckoutButton />
							</Box>
							<UserMenu />
						</>
					) : (
						<LoginButton />
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
}

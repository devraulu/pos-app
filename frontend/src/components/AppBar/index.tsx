import {
	AppBar,
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
import { useSigninCheck, useUser } from 'reactfire';

import CheckoutButton from './CheckoutButton';
import LoginButton from './LoginButton';
import UserMenu from './UserMenu';
import { css } from '@emotion/react';
import { useLocation } from '@reach/router';

const pages = [
	{ name: 'Productos', path: '/products' },
	{ name: 'Clientes', path: '/clients' },
	{ name: 'Usuarios', path: '/users' },
	{ name: 'Reportes', path: '/reports' },
];

const adminRoutes = ['/reports', '/users'];

export default function POSAppBar() {
	const { status: isSignedInStatus, data: signinCheck } = useSigninCheck({
		// @ts-ignore
		requiredClaims: { admin: true },
	});
	const { signedIn, hasRequiredClaims: isAdmin } = signinCheck || {};

	return (
		<AppBar position='sticky'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography variant='h2' noWrap>
						POS
					</Typography>
					<Box sx={{ flexGrow: 1, ml: 2 }}>
						{pages.map(
							({ name, path }, i) =>
								((isAdmin && adminRoutes.includes(path)) ||
									!adminRoutes.includes(path)) && (
									<Button
										key={path}
										href={path}
										variant='text'
										css={css`
											color: white;
											margin-left: 10px;
											&:first-of-type {
												margin-left: 0;
											}
										`}>
										{name}
									</Button>
								)
						)}
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


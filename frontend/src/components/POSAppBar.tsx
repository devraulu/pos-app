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

import { css } from '@emotion/react';
import { useState } from 'react';

const pages = [
	{ name: 'Productos', path: '/products' },
	{ name: 'Pedidos', path: '/orders' },
	{ name: 'Clientes', path: '/clients' },
	{ name: 'Usuarios', path: '/users' },
];

const settings = [
	{ name: 'Dashboard', path: '/dashboard' },
	{ name: 'Configuración', path: '/settings' },
];

export default function POSAppBar() {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

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
									color: black;
									margin-left: 10px;
									&:first-of-type {
										margin-left: 0;
									}
								`}>
								{name}
							</Button>
						))}
					</Box>
					<Box>
						<Button
							variant='outlined'
							href='/checkout'
							css={css`
								color: black;
								border-color: black;
								margin-right: 15px;
								&:hover {
									border-color: black;
									transform: scale(0.95);
									transition: all 0.2s ease-in-out;
								}
							`}>
							Despachar
						</Button>
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt='Remy Sharp' src='https://i.pravatar.cc/300' />
							</IconButton>
						</Tooltip>
						<Menu
							keepMounted
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{settings.map(({ name, path }) => (
								<MenuItem key={path} onClick={handleCloseUserMenu}>
									<Button href={path} variant='text'>
										{name}
									</Button>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

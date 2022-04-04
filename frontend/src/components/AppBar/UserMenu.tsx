import {
	Avatar,
	Box,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Tooltip,
} from '@mui/material';
import { useEffect, useState } from 'react';

import { stringAvatar } from 'utils/avatar';
import { useUser } from 'reactfire';

const settings = [{ name: 'Cerrar sesión', path: '/logout' }];

interface UserMenuProps {}

const UserMenu: React.FunctionComponent<UserMenuProps> = () => {
	const { status, data: user } = useUser();
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title='Open settings'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar {...stringAvatar(user?.displayName || undefined)} />
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
	);
};

export default UserMenu;


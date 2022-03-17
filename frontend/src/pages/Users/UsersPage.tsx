import { ReactNode, useEffect, useState } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';

import { useUser } from 'reactfire';

interface Props extends RouteComponentProps {
	children?: ReactNode;
	isAdmin: boolean;
}

export default function UsersPage({ children, isAdmin }: Props) {
	useEffect(() => {
		!isAdmin && navigate('/');
	}, []);

	return <>{children}</>;
}

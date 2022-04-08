import { ReactNode, useEffect, useState } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';

interface Props extends RouteComponentProps {
	children?: ReactNode;
	isAdmin: boolean;
}

export default function ReportsPage({ children, isAdmin }: Props) {
	useEffect(() => {
		!isAdmin && navigate('/');
	}, []);

	return <>{children}</>;
}


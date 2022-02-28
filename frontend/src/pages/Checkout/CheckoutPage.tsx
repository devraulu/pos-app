import { ReactNode } from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {
	children?: ReactNode;
}

export default function CheckoutPage({ children }: Props) {
	return <>{children}</>;
}

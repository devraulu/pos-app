import { Configure, InstantSearch } from 'react-instantsearch-hooks';

import ClientsInstantSearch from 'components/Users/UsersInstantSearch';
import { ReactNode } from 'react';
import { RouteComponentProps } from '@reach/router';
import searchClient from 'algolia/searchClient';

interface Props extends RouteComponentProps {
	children?: ReactNode;
}

export default function ClientsPage({ children }: Props) {
	return <ClientsInstantSearch>{children}</ClientsInstantSearch>;
}
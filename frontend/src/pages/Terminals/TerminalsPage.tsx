import { Configure, InstantSearch } from 'react-instantsearch-hooks';

import ClientsInstantSearch from 'components/Users/UsersInstantSearch';
import { ReactNode } from 'react';
import { RouteComponentProps } from '@reach/router';
import searchClient from 'algolia/searchClient';
import TerminalInstantSearch from 'components/TerminalRegistration/TerminalInstantSearch';

interface Props extends RouteComponentProps {
	children?: ReactNode;
}

export default function TerminalsPage({ children }: Props) {
	return <TerminalInstantSearch>{children}</TerminalInstantSearch>;
}
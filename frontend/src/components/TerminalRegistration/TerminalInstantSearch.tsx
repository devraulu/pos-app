import { Configure, InstantSearch } from 'react-instantsearch-hooks';

import { ReactNode } from 'react';
import searchUser from 'algolia/searchClient';

type Props = { children: ReactNode };
export default function TerminalInstantSearch({ children }: Props) {
	return (
		<InstantSearch searchClient={searchUser} indexName='dev_Users'>
			<Configure hitsPerPage={50} filters='deleted:false' />
			{children}
		</InstantSearch>
	);
}

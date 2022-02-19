import { ReactNode } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Configure, InstantSearch } from 'react-instantsearch-hooks';
import searchClient from '../algolia/searchClient';

type Props = { children: ReactNode } & RouteComponentProps;

export default function ProductsHomePage({ children }: Props) {
	return (
		<>
			<InstantSearch searchClient={searchClient} indexName='dev_Products'>
				<Configure hitsPerPage={30} filters='deleted:false' />
				{children}
			</InstantSearch>
		</>
	);
}

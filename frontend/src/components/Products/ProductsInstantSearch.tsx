import { Configure, InstantSearch } from 'react-instantsearch-hooks';
import React, { ReactNode } from 'react';

import searchClient from 'algolia/searchClient';

type Props = { children?: ReactNode; filters?: string };

export default function ProductsInstantSearch({
	children,
	filters = 'deleted:false',
}: Props) {
	return (
		<InstantSearch searchClient={searchClient} indexName='dev_Products'>
			<Configure hitsPerPage={30} filters={filters} />
			{children}
		</InstantSearch>
	);
}

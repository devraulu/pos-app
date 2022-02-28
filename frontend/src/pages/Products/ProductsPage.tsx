import { Configure, InstantSearch } from 'react-instantsearch-hooks';

import ProductsInstantSearch from 'components/Products/ProductsInstantSearch';
import { ReactNode } from 'react';
import { RouteComponentProps } from '@reach/router';
import searchClient from 'algolia/searchClient';

type Props = { children: ReactNode } & RouteComponentProps;

export default function ProductsPage({ children }: Props) {
	return <ProductsInstantSearch>{children}</ProductsInstantSearch>;
}

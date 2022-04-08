import { Box, Grid, Pagination } from '@mui/material';
import { GridCallbackDetails, GridSortModel } from '@mui/x-data-grid';
import {
	UseHitsProps,
	useHits,
	useHitsPerPage,
	usePagination,
} from 'react-instantsearch-hooks';
import { useEffect, useState } from 'react';

import { Hit as AlgoliaHit } from '@algolia/client-search';
import { css } from '@emotion/react';
import { navigate } from '@reach/router';
import SalesDG from './SalesDG';
import { IOrder } from 'models';
import { collection, query } from 'firebase/firestore';
import { useFirestore } from 'reactfire';
import FilterSelect from '../FilterSelect';

export type HitsProps<THit> = React.ComponentProps<'div'> &
	UseHitsProps & {
		hitComponent?: (props: { hit: THit }) => JSX.Element;
	};

export function Hits<THit extends AlgoliaHit<Record<string, unknown>>>({
	hitComponent: Hit,
}: HitsProps<THit>) {
	const [hits, setHits] = useState<IOrder[]>([]);

	const SalesDGProps = {
		hits,
	};

	return (
		<>
			<Box sx={{ w: 100, mt: 4 }}>
				<SalesDG {...SalesDGProps} />
			</Box>
		</>
	);
}


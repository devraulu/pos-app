import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';

import { Hit as AlgoliaHit } from '@algolia/client-search';
import CheckoutProductCard from './CheckoutProductCard';
import { Product } from 'models';
import { useInfiniteHits } from 'react-instantsearch-hooks';
import { uuid } from 'utils';

export default function CheckoutHits() {
	const { hits, showMore, results, isLastPage, currentPageHits } =
		useInfiniteHits();

	return (
		<Box sx={{ mt: 4 }}>
			<Grid container spacing={3}>
				{hits?.map((hit) => (
					<Grid item key={uuid()} xs={3}>
						<CheckoutProductCard hit={hit} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

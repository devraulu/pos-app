import { Box, Button, Grid, Pagination } from '@mui/material';
import { ChangeEvent, useReducer, useState } from 'react';
import {
	UseHitsProps,
	useConfigure,
	useCurrentRefinements,
	useHits,
	useHitsPerPage,
	useInfiniteHits,
	usePagination,
	useSearchBox,
} from 'react-instantsearch-hooks';

import { Hit as AlgoliaHit } from '@algolia/client-search';
import DeleteDialog from '../common/DeleteDialog';
import { toast } from 'react-toastify';
import { useDB } from 'hooks/firebase';

export type HitsProps<THit> = React.ComponentProps<'div'> &
	UseHitsProps & {
		// @ts-ignore
		hitComponent: (props: { hit; handleDelete }) => JSX.Element;
	};

export function Hits<THit extends AlgoliaHit<Record<string, unknown>>>({
	hitComponent: Hit,
}: HitsProps<THit>) {
	// const { hits, showMore, results, isLastPage, currentPageHits } =
	// 	useInfiniteHits();
	const { refine: refineSearchBox, clear } = useSearchBox();
	const { hits, results } = useHits();
	const configureHPP = useHitsPerPage({
		items: [{ value: 30, label: 'Default', default: true }],
	});
	const { nbPages, refine, isLastPage } = usePagination();
	const [openDialog, setOpenDialog] = useState(false);
	const [productName, setProductName] = useState('');
	const [productId, setProductId] = useState('');

	const { deleteDocByID } = useDB();

	const handleDelete = (id: string, productName: string) => {
		setOpenDialog(true);
		setProductId(id);
		setProductName(productName);
	};

	const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
		refine(value);
	};

	const handleConfirmDelete = () => {
		try {
			deleteDocByID(productId);
			setOpenDialog(false);
			setProductId('');
			setProductName('');
			toast.success('Producto eliminado');
			refineSearchBox(' ');
		} catch (e) {
			toast.error((e as Error).message);
		}
	};

	return (
		<>
			<DeleteDialog
				open={openDialog}
				handleConfirm={handleConfirmDelete}
				handleCancel={() => setOpenDialog(false)}
				message={
					<>
						Delete product with name: <strong>{productName}</strong>
					</>
				}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Grid container sx={{ mt: 5 }} spacing={4}>
					{hits.length > 0 &&
						hits.map((hit) => (
							<Grid item xs={3}>
								<Hit
									key={hit?.objectID}
									hit={hit as unknown as THit}
									handleDelete={() => handleDelete(hit?.objectID, hit?.name)}
								/>
							</Grid>
						))}
				</Grid>
				<Pagination
					count={nbPages}
					onChange={handlePageChange}
					size='large'
					sx={{ mt: 4 }}
				/>
			</Box>
		</>
	);
}


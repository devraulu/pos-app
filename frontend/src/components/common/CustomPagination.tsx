import {
	gridPageCountSelector,
	useGridApiContext,
	useGridSelector,
} from '@mui/x-data-grid';

import { Pagination } from '@mui/material';

type Props = {
	page: number;
	handlePageChange: (page: number) => void;
};

export function CustomPagination({ page, handlePageChange }: Props) {
	const apiRef = useGridApiContext();
	const pageCount = useGridSelector(apiRef, gridPageCountSelector);

	return (
		<Pagination
			color='primary'
			count={pageCount}
			page={page + 1}
			shape='rounded'
			onChange={(event, value) => {
				handlePageChange(value - 2);
			}}
		/>
	);
}


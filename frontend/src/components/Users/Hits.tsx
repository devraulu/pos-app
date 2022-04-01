import { Box, Pagination } from '@mui/material';
import { GridCallbackDetails, GridSortModel } from '@mui/x-data-grid';
import {
	UseHitsProps,
	useHits,
	useHitsPerPage,
	usePagination,
} from 'react-instantsearch-hooks';
import { useEffect, useState } from 'react';

import { Hit as AlgoliaHit } from '@algolia/client-search';
import { User } from 'firebase/auth';
import UsersDG from './UsersDG';
import { httpsCallable } from 'firebase/functions';
import { toast } from 'react-toastify';
import { useFunctions } from 'reactfire';

export type HitsProps<THit> = React.ComponentProps<'div'> &
	UseHitsProps & {
		hitComponent?: (props: { hit: THit }) => JSX.Element;
	};

export function Hits<THit extends AlgoliaHit<Record<string, unknown>>>({
	hitComponent: Hit,
}: HitsProps<THit>) {
	const functions = useFunctions();
	const getUsers = httpsCallable<unknown, { users: User[] }>(
		functions,
		'getUsers'
	);

	const [page, setPage] = useState(0);
	const [users, setUsers] = useState<null | User[]>();
	const [error, setError] = useState<string>();

	const getUsersFromFirestore = async () => {
		try {
			const res = await getUsers();
			setUsers(res.data.users as User[]);
			console.log('res', res);
		} catch (e) {
			toast.error('An error ocurred fetching the users');
			console.log('Error', e);
			setError((e as Error).message);
		}
	};
	useEffect(() => {
		getUsersFromFirestore();
	}, []);

	const UsersDGProps = {
		loading: !users && !error,
		hits: users || [],
		nbHits: 0,
	};

	return (
		<>
			<Box sx={{ w: 100, mt: 4 }}>
				<UsersDG {...UsersDGProps} />
			</Box>
		</>
	);
}


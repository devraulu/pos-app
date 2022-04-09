import { httpsCallable } from 'firebase/functions';
import { useEffect, useState } from 'react';
import { useFunctions } from 'reactfire';
import dayjs from 'dayjs';
import { IProduct } from 'models';
import { TimeQueries, timeQueries } from 'utils/timeQueries';

const useMostSoldProducts = (filter: keyof TimeQueries) => {
	const [data, setData] = useState<IProduct[]>([]);
	const functions = useFunctions();

	const getMostSoldProducts = async () => {
		const fetcher = httpsCallable<unknown, IProduct[]>(
			functions,
			'getMostSoldProducts'
		);
		const result = await fetcher({
			limitDate: dayjs().subtract(timeQueries[filter], 'day').toDate(),
		});
		console.log('result', result);
		setData(result.data);
	};
	useEffect(() => {
		getMostSoldProducts();
	}, [filter]);

	return data;
};

export default useMostSoldProducts;


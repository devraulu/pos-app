import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { TimeQueries, timeQueries } from 'utils/timeQueries';
import { useCollectionFromDB } from '.';
import { Timestamp, where } from 'firebase/firestore';

const useOrdersByDate = (filter: keyof TimeQueries) => {
	const orders = useCollectionFromDB('orders', [
		where(
			'createdAt',
			'>=',
			Timestamp.fromDate(
				dayjs()
					.subtract(timeQueries[filter as keyof TimeQueries], 'day')
					.toDate()
			)
		),
	]);
	useEffect(() => {}, [filter]);

	return orders;
};

export default useOrdersByDate;


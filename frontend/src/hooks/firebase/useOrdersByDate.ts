import { httpsCallable } from 'firebase/functions';
import { useEffect, useState } from 'react';
import { useFunctions } from 'reactfire';
import * as dayjs from 'dayjs';
import { IProduct } from 'models';
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


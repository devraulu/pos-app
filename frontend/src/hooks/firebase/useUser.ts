import React, { useEffect, useState } from 'react';

import { User } from 'firebase/auth';
import { httpsCallable } from 'firebase/functions';
import { useFunctions } from 'reactfire';

export default function useUser(uid: string) {
	const [user, setUser] = useState<null | User>(null);
	const [error, setError] = useState<null | string>(null);
	const functions = useFunctions();
	const getUserById = httpsCallable(functions, 'getUserById');

	const getUser = async () => {
		try {
			const res = await getUserById({ uid });
			setUser(res.data as User);
		} catch (e) {
			setError((e as Error).message);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return { user, error };
}

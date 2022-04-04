import React, { useEffect, useState } from 'react';

import { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import { useAppDispatch } from 'store/hooks';
import { addToCart } from 'store/checkout/checkout.slice';
import { IProduct } from 'models';
import useDebounce from 'hooks/useDebounce';
import { toast } from 'react-toastify';
import { useDB } from 'hooks/firebase';

type Props = { cssProp?: SerializedStyles; width?: number; height?: number };

export default function BarcodeScanner({ cssProp }: Props) {
	const { getDocByCode } = useDB();
	const [code, setCode] = useState('');
	const debouncedCode = useDebounce(code, 700);
	const dispatch = useAppDispatch();

	const getByCode = async (code: string) => {
		try {
			const p = await getDocByCode(code);

			dispatch(addToCart({ ...p.data(), objectID: p.id } as IProduct));
			toast.success(`${p.data().name} added to cart`);
		} catch (error) {
			toast.error(`${code} not found`);
		}
	};
	useEffect(() => {
		if (debouncedCode) {
			getByCode(debouncedCode);
		}
	}, [debouncedCode]);

	return (
		<div css={cssProp}>
			<BarcodeScannerComponent
				width={200}
				height={200}
				onUpdate={(err, result) => {
					if (result) {
						setCode(result.getText());
					}
				}}
			/>
		</div>
	);
}


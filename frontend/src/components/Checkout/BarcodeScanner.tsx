import React, { useEffect, useState } from 'react';

import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import { Dialog } from '@mui/material';
import { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

type Props = { cssProp?: SerializedStyles; width?: number; height?: number };

export default function BarcodeScanner({
	width = 500,
	height = 500,
	cssProp,
}: Props) {
	const [code, setCode] = useState('');

	const handleScan = (result: any) => {
		console.log('Result', result);
	};

	const handleError = () => {};

	return (
		<div css={cssProp}>
			<BarcodeScannerComponent
				width={100}
				height={100}
				onUpdate={(err, result) => {
					if (result) console.log('Result', result);
					else console.log('Error', err);
				}}
			/>
		</div>
	);
}

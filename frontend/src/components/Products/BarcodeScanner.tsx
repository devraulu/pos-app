import { Box, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import useDebounce from 'hooks/useDebounce';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';

interface BarcodeScannerProps {}

const BarcodeScanner: React.FunctionComponent<BarcodeScannerProps> = () => {
	const [code, setCode] = useState('');
	const debouncedCode = useDebounce(code, 1000);

	const { setFieldValue } = useFormikContext();

	useEffect(() => {
		if (debouncedCode) {
			setFieldValue('code', debouncedCode);
		}
	}, [debouncedCode]);

	return (
		<BarcodeScannerComponent
			width={80}
			height={80}
			onUpdate={(err, result) => {
				if (result) {
					setCode(result.getText());
					console.log(result);
				}
			}}
		/>
	);
};

export default BarcodeScanner;


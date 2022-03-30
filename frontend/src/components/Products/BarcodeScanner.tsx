import { Box, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import useDebounce from 'hooks/useDebounce';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

interface BarcodeScannerProps {}

const BarcodeScanner: React.FunctionComponent<BarcodeScannerProps> = () => {
	const [code, setCode] = useState('');
	const debouncedCode = useDebounce(code, 1000);

	const { setFieldValue, setFieldTouched } = useFormikContext();

	useEffect(() => {
		if (debouncedCode) {
			setFieldValue('code', debouncedCode);
			setFieldTouched('code', true);
			console.log('Encontrado', debouncedCode);
		}
	}, [debouncedCode]);

	return (
		<BarcodeScannerComponent
			width={200}
			height={200}
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


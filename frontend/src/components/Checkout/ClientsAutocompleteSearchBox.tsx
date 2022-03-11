import {
	Autocomplete,
	AutocompleteChangeDetails,
	AutocompleteChangeReason,
	AutocompleteRenderInputParams,
	Avatar,
	TextField,
	Typography,
} from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import {
	UseSearchBoxProps,
	useInfiniteHits,
	useSearchBox,
} from 'react-instantsearch-hooks';
import { addToCart, setClient } from 'store/checkout/checkout.slice';

import { Box } from '@mui/system';
import { stringAvatar } from 'utils/avatar';
import { useAppDispatch } from 'store/hooks';
import useDebounce from 'hooks/useDebounce';

interface AutocompleteSearchBoxProps extends UseSearchBoxProps {
	placeholder?: string;
	className?: string;
}

const ClientsAutocompleteSearchBox: FunctionComponent<
	AutocompleteSearchBoxProps
> = (props) => {
	const { query, refine, isSearchStalled } = useSearchBox(props);
	const { hits } = useInfiniteHits();

	const [sortedHits, setSortedHits] = useState<null | typeof hits>(null);
	const [inputValue, setInputValue] = useState<null | string>(query || '');
	const debouncedValue = useDebounce(inputValue);

	const dispatch = useAppDispatch();

	const handleChange = (
		event: React.SyntheticEvent<Element, Event>,
		value: any | null,
		reason: AutocompleteChangeReason,
		details?: AutocompleteChangeDetails<any> | undefined
	) => {
		console.log('handleChange', event, value, reason, details);
		if (
			event.type === 'keydown' &&
			(event as React.KeyboardEvent).key === 'Backspace' &&
			reason === 'removeOption'
		) {
			return;
		}
		dispatch(setClient(value));
		setInputValue('');
	};

	useEffect(() => {
		if (query !== debouncedValue) {
			refine(debouncedValue || '');
		}
	}, [debouncedValue, refine]);

	useEffect(() => {
		setSortedHits(
			hits.sort((a, b) => (a?.name as string).localeCompare(b?.name as string))
		);
	}, [hits]);

	return (
		<Autocomplete
			fullWidth
			clearOnBlur
			clearOnEscape
			size='small'
			inputValue={inputValue || ''}
			noOptionsText='No se han encontrado clientes'
			onInputChange={(event, value, reason) => {
				console.log('onInputChange', event, value, reason);
				setInputValue(value);
			}}
			onChange={handleChange}
			options={sortedHits || []}
			groupBy={(option) => option.category}
			renderOption={(props, option, { selected }) => (
				<li {...props}>
					<Box display='flex' alignItems='center'>
						<Avatar {...stringAvatar(option?.name)} />
						<Box ml={1}>
							<Box>
								<Typography variant='body2'>{option?.cardCode}</Typography>
							</Box>
							<Box>
								<Typography>{option?.name}</Typography>
							</Box>
						</Box>
					</Box>
				</li>
			)}
			getOptionLabel={(option) => option?.name}
			renderInput={(params: AutocompleteRenderInputParams) => (
				<TextField
					{...params}
					inputProps={{
						...params?.inputProps,
					}}
					label='Cliente'
				/>
			)}
		/>
	);
};

export default ClientsAutocompleteSearchBox;

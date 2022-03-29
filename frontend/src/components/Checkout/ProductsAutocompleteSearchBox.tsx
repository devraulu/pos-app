import {
	Autocomplete,
	AutocompleteChangeDetails,
	AutocompleteChangeReason,
	AutocompleteRenderInputParams,
	TextField,
	Typography,
} from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import {
	UseSearchBoxProps,
	useInfiniteHits,
	useSearchBox,
} from 'react-instantsearch-hooks';

import { Box } from '@mui/system';
import { addToCart } from 'store/checkout/checkout.slice';
import { useAppDispatch } from 'store/hooks';
import useDebounce from 'hooks/useDebounce';

interface ProductsAutocompleteSearchBoxProps extends UseSearchBoxProps {
	placeholder?: string;
	className?: string;
}

const ProductsAutocompleteSearchBox: FunctionComponent<
	ProductsAutocompleteSearchBoxProps
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
		dispatch(addToCart(value));
		setInputValue('');
	};

	useEffect(() => {
		if (query !== debouncedValue) {
			refine(debouncedValue || '');
		}
	}, [debouncedValue, refine]);

	useEffect(() => {
		setSortedHits(
			hits.sort((a, b) =>
				(a.category as string).localeCompare(b.category as string)
			)
		);
	}, [hits]);

	return (
		<Autocomplete
			fullWidth
			clearOnBlur
			clearOnEscape
			filterOptions={x => x}
			size='small'
			inputValue={inputValue || ''}
			noOptionsText='No products found'
			onInputChange={(event, value, reason) => {
				console.log('onInputChange', event, value, reason);
				setInputValue(value);
			}}
			onChange={handleChange}
			options={sortedHits || []}
			groupBy={(option) => option.category}
			renderOption={(props, option, { selected }) => (
				<li {...props}>
					<Box>
						<Box>
							<Typography>{option.name}</Typography>
						</Box>
					</Box>
				</li>
			)}
			getOptionLabel={(option) => option.name}
			renderInput={(params: AutocompleteRenderInputParams) => (
				<TextField
					{...params}
					inputProps={{
						...params.inputProps,
					}}
					label='Producto'
				/>
			)}
		/>
	);
};

export default ProductsAutocompleteSearchBox;

import { InputAdornment, TextField } from '@mui/material';
import { UseSearchBoxProps, useSearchBox } from 'react-instantsearch-hooks';
import { useEffect, useRef, useState } from 'react';

import { Search } from '@mui/icons-material';

export type SearchBoxProps = UseSearchBoxProps;

export function SearchBox(props: SearchBoxProps) {
	const { query, refine, isSearchStalled } = useSearchBox(props);
	const [inputValue, setInputValue] = useState(query);
	const inputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		event.stopPropagation();

		if (inputRef.current) {
			inputRef.current.blur();
		}
	}

	function handleReset(event: React.FormEvent) {
		event.preventDefault();
		event.stopPropagation();

		setInputValue('');

		if (inputRef.current) {
			inputRef.current.focus();
		}
	}

	// Track when the value coming from the React state changes to synchronize
	// it with InstantSearch.
	useEffect(() => {
		if (query !== inputValue) {
			refine(inputValue);
		}
	}, [inputValue, refine]);

	// Track when the InstantSearch query changes to synchronize it with
	// the React state.
	useEffect(() => {
		// Bypass the state update if the input is focused to avoid concurrent
		// updates when typing.
		if (document.activeElement !== inputRef.current && query !== inputValue) {
			setInputValue(query);
		}
	}, [query]);

	return (
		<div className='ais-SearchBox'>
			<form
				action=''
				className=''
				noValidate
				onSubmit={handleSubmit}
				onReset={handleReset}>
				<TextField
					ref={inputRef}
					autoComplete='off'
					autoCorrect='off'
					autoCapitalize='off'
					placeholder={props.placeholder}
					spellCheck={false}
					type='search'
					value={inputValue}
					onChange={(event) => setInputValue(event.currentTarget.value)}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<Search />
							</InputAdornment>
						),
					}}
					sx={{ width: '100%' }}
				/>
			</form>
		</div>
	);
}

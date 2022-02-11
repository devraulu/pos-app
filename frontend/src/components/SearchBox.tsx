import { useEffect, useRef, useState } from 'react';
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch-hooks';

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
				<input
					ref={inputRef}
					className='border-b-2 focus:border-purple-400 outline-none ring-offset-2 w-full p-2 text-lg'
					autoComplete='off'
					autoCorrect='off'
					autoCapitalize='off'
					placeholder={props.placeholder}
					spellCheck={false}
					maxLength={512}
					type='search'
					value={inputValue}
					onChange={(event) => setInputValue(event.currentTarget.value)}
				/>
			</form>
		</div>
	);
}

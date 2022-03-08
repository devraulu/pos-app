import { InputAdornment, TextField } from '@mui/material';
import { UseSearchBoxProps, useSearchBox } from 'react-instantsearch-hooks';
import { useEffect, useRef, useState } from 'react';

import React from 'react';
import { Search } from '@mui/icons-material';
import { SearchBox } from 'components/common/SearchBox';
import { css } from '@emotion/react';
import useDebounce from 'hooks/useDebounce';

interface ClientsSearchProps {}

const ClientsSearch: React.FunctionComponent<ClientsSearchProps> = () => {
	const { query, refine, isSearchStalled } = useSearchBox();
	const [inputValue, setInputValue] = useState(query);
	const debouncedValue = useDebounce(inputValue);

	useEffect(() => {
		if (query !== inputValue) {
			refine(inputValue);
		}
	}, [debouncedValue, refine]);

	return (
		<TextField
			fullWidth
			size='small'
			autoComplete='off'
			autoCorrect='off'
			autoCapitalize='off'
			placeholder='Client'
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
	);
};

export default ClientsSearch;

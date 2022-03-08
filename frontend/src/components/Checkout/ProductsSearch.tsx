import { Autocomplete } from '@mui/material';
import AutocompleteSearchBox from 'components/Checkout/AutocompleteSearchBox';
import ProductsInstantSearch from 'components/Products/ProductsInstantSearch';
import { SearchBox } from 'components/common/SearchBox';

export default function ProductsSearch() {
	return (
		<>
			{/* <SearchBox placeholder='Product' /> */}
			<AutocompleteSearchBox />
		</>
	);
}

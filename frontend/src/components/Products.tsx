import { Hits } from './Hits';
import ProductCard from './ProductCard';
import { SearchBox } from './SearchBox';
import { Product } from '../models';

type Props = {
	products: Product[];
};

export default function Products({ products }: Props) {
	return (
		<div className='container'>
			<div className='flex justify-between'>
				<h1 className='text-2xl'>Productos</h1>
				<SearchBox placeholder='Search by name, category...' />
			</div>
			<Hits hitComponent={ProductCard} />
		</div>
	);
}

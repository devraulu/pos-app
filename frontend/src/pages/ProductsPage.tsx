import Products from '../components/Products';
import { FixMeLater } from '../models';

type Props = {
	products: FixMeLater[];
};
export default function ProductsPage({ products }: Props) {
	return <Products products={products} />;
}

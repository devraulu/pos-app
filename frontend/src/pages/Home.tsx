import { useEffect, useState } from 'react';
import ProductsPage from './ProductsPage';
import { getDataFromDB } from '../utils';
import AddProduct from '../components/AddProduct';
import { toast } from 'react-toastify';

const views = ['Productos', 'Pedidos', 'Pagar', 'Agregar producto'];

export default function Home() {
	const [products, setProducts] = useState<any[]>([]);
	const [view, setView] = useState('');

	useEffect(() => {
		const getAndSetData = async () => {
			setProducts(await getDataFromDB());
		};
		getAndSetData();
	}, []);

	return (
		<div className='flex flex-col h-full justify-end'>
			<nav className='order-last flex justify-around bg-gray-100 py-6 text-purple-500 px-12 text-lg'>
				{views.map((viewLink) => (
					<button
						className={`${
							view === viewLink ? 'text-purple-500' : 'text-gray-800'
						} h-full`}
						onClick={(e) => setView(viewLink)}>
						{viewLink}
					</button>
				))}
			</nav>
			<div className='h-full'>
				{view === 'Productos' && <ProductsPage products={products} />}
				{view === 'Agregar producto' && <AddProduct />}
			</div>
		</div>
	);
}

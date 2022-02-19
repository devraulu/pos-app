import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import './App.css';

import AddProductPage from './pages/AddProductPage';
import ClientsHomePage from './pages/ClientsHomePage';
import ClientsPage from './pages/ClientsPage';
import EditProductPage from './pages/EditProductPage';
import Home from './pages/Home';
import POSAppBar from './components/POSAppBar';
import ProductsHomePage from './pages/ProductsHomePage';
import ProductsPage from './pages/ProductsPage';
import { Router } from '@reach/router';
import { ToastContainer } from 'react-toastify';
import searchClient from './algolia/searchClient';

function App() {
	return (
		<>
			<POSAppBar />
			<Router>
				<Home path='/' />
				<ProductsPage path='products'>
					<ProductsHomePage path='/' />
					<EditProductPage path=':id/edit' />
					<AddProductPage path='new' />
				</ProductsPage>

				<ClientsPage path='clients'>
					<ClientsHomePage path='/' />
				</ClientsPage>
			</Router>
			<ToastContainer position='top-right' />
		</>
	);
}

export default App;

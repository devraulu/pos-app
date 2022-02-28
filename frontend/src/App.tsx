import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import './App.css';

import AddClientPage from 'pages/Clients/AddClientPage';
import AddProductPage from 'pages/Products/AddProductPage';
import CheckoutHomePage from 'pages/Checkout/CheckoutHomePage';
import CheckoutPage from 'pages/Checkout/CheckoutPage';
import ClientsHomePage from 'pages/Clients/ClientsHomePage';
import ClientsPage from 'pages/Clients/ClientsPage';
import EditClientPage from 'pages/Clients/EditClientPage';
import EditProductPage from 'pages/Products/EditProductPage';
import Home from 'pages/Home';
import POSAppBar from 'components/POSAppBar';
import ProductsHomePage from 'pages/Products/ProductsHomePage';
import ProductsPage from 'pages/Products/ProductsPage';
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
					<EditClientPage path=':id/edit' />
					<AddClientPage path='new' />
				</ClientsPage>

				<CheckoutPage path='checkout'>
					<CheckoutHomePage path='/' />
				</CheckoutPage>
			</Router>
			<ToastContainer position='top-right' />
		</>
	);
}

export default App;

import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import './App.css';

import AddClientPage from 'pages/Clients/AddClientPage';
import AddProductPage from 'pages/Products/AddProductPage';
import AddUserpage from 'pages/Users/AddUsersPage';
import { Box } from '@mui/material';
import CheckoutHomePage from 'pages/Checkout/CheckoutHomePage';
import CheckoutPage from 'pages/Checkout/CheckoutPage';
import ClientsHomePage from 'pages/Clients/ClientsHomePage';
import ClientsPage from 'pages/Clients/ClientsPage';
import UsersPage from 'pages/Users/UsersPage'
import EditClientPage from 'pages/Clients/EditClientPage';
import EditProductPage from 'pages/Products/EditProductPage';
import EditUser from 'pages/Users/EditUsersPage';
import UsersHomePage from 'pages/Users/UsersHomePage';
import Home from 'pages/Home';
import POSAppBar from 'components/POSAppBar';
import ProductsHomePage from 'pages/Products/ProductsHomePage';
import ProductsPage from 'pages/Products/ProductsPage';
import { Router } from '@reach/router';
import { ToastContainer } from 'react-toastify';
import searchClient from './algolia/searchClient';

function App() {
	return (
		<Box>
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

				<UsersPage path='users'>
					<UsersHomePage path='/' />
					<EditUser path=':id/edit' />
					<AddUserpage path='new' />
				</UsersPage>

				<CheckoutPage path='checkout'>
					<CheckoutHomePage path='/' />
				</CheckoutPage>
			</Router>
			<ToastContainer position='top-right' />
		</Box>
	);
}

export default App;

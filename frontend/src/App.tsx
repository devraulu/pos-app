import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import './App.css';

import { Redirect, Router } from '@reach/router';

import AddClientPage from 'pages/Clients/AddClientPage';
import AddProductPage from 'pages/Products/AddProductPage';
import { Box } from '@mui/material';
import CheckoutHomePage from 'pages/Checkout/CheckoutHomePage';
import CheckoutPage from 'pages/Checkout/CheckoutPage';
import ClientsHomePage from 'pages/Clients/ClientsHomePage';
import ClientsPage from 'pages/Clients/ClientsPage';
import EditClientPage from 'pages/Clients/EditClientPage';
import EditProductPage from 'pages/Products/EditProductPage';
import Home from 'pages/Home';
import LoginPage from 'pages/Auth/LoginPage';
import LogoutPage from 'pages/Auth/LogoutPage';
import POSAppBar from 'components/AppBar';
import ProductsHomePage from 'pages/Products/ProductsHomePage';
import ProductsPage from 'pages/Products/ProductsPage';
import ProtectedRoutes from 'pages/Auth/ProtectedRoutes';
import PublicRoutes from 'pages/Auth/PublicRoutes';
import { ToastContainer } from 'react-toastify';
import { useSigninCheck } from 'reactfire';

function App() {
	const { status: isSignedInStatus, data: signinCheck } = useSigninCheck();
	const { signedIn } = signinCheck || {};

	return isSignedInStatus !== 'loading' ? (
		<Box>
			<POSAppBar />
			{signedIn ? <ProtectedRoutes /> : <PublicRoutes />}
			<ToastContainer position='top-right' />
		</Box>
	) : (
		<></>
	);
}

export default App;

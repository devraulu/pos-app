import Home from './pages/Home';
import { InstantSearch } from 'react-instantsearch-hooks';
import searchClient from './algolia/searchClient';
import { toast, ToastContainer } from 'react-toastify';
import './index.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<InstantSearch searchClient={searchClient} indexName='dev_Products'>
				<div className='h-screen'>
					<Home />
				</div>
			</InstantSearch>
			<ToastContainer position='top-right' />
		</>
	);
}

export default App;

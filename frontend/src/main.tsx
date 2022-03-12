import {
	CssBaseline,
	LinkProps,
	ThemeProvider,
	createTheme,
} from '@mui/material';

import App from './App';
import { FirebaseAppProvider } from 'reactfire';
import FirebaseComponents from 'components/FirebaseComponents';
import LinkBehavior from './components/mui/LinkBehavior';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseConfig } from 'firebase-config';
import { store } from 'store';

const theme = createTheme({
	palette: {
		primary: {
			main: '#2A2D34',
		},
		secondary: {
			main: '#8075FF',
		},
	},
	components: {
		MuiLink: { component: LinkBehavior } as LinkProps,
	},
});

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Provider store={store}>
				<FirebaseAppProvider firebaseConfig={firebaseConfig}>
					<FirebaseComponents>
						<App />
					</FirebaseComponents>
				</FirebaseAppProvider>
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

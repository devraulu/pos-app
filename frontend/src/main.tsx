import {
	CssBaseline,
	LinkProps,
	ThemeProvider,
	createTheme,
} from '@mui/material';
import { green, purple } from '@mui/material/colors';

import App from './App';
import LinkBehavior from './components/mui/LinkBehavior';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'store';

const theme = createTheme({
	palette: {
		primary: {
			main: '#00bfa5',
		},
		secondary: {
			main: '#a7ffeb',
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
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

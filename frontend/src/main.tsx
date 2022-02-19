import {
	createTheme,
	CssBaseline,
	LinkProps,
	ThemeProvider,
} from '@mui/material';
import { green, purple } from '@mui/material/colors';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LinkBehavior from './components/mui/LinkBehavior';

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
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

/**
 * TODO: 
 * - Implement React Router
 * - Grid layout for animal cards
 * - Figure where to put api calls
 */

import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import './App.css';
// Components
import AppBar from './components/uiComponents/AppBar';
import AnimalSelectionPage from './containers/AnimalSelectionPage/AnimalSelectionPage';

const theme = createMuiTheme({
	palette: {
		primary: deepPurple,
		secondary: indigo
	}
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<AppBar />
				<AnimalSelectionPage />
			</div>
		</ThemeProvider>
	);
};

export default App;

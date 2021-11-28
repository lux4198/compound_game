import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme , ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createTheme({
  
  palette: {
    primary: {
      main:"#FA6765",
    },
    secondary: {
      main:"#54A3B5",
    },
    navbar : {
      main : '#ac6354'
    },
    backgroundColor : {
      default :'#e4edf7', 
    },
  },
  typography: {
    fontFamily: [
      'Roboto', 'sans-serif'
    ],
    fontSize: 'inherit',  
  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

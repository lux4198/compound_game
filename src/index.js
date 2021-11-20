import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme , ThemeProvider} from '@material-ui/core/styles'


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
      'Roboto'
    ],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

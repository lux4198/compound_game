import { createTheme , ThemeProvider, makeStyles } from '@material-ui/core/styles'
import './App.css';
import React, { useState} from 'react'
import Typography from '@material-ui/core/Typography'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


// Components

import CustomBtn from './components/CustomBtn'
import Input from './components/Input'
import StartCard from './components/StartCard'
import Game from './components/Game';
import NavBar from './components/NavBar';


// Icons / images

import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';



const styles = makeStyles({
  gameInterface : { 
    marginRight:'3rem', 
    paddingLeft:'4rem',
    paddingRight:'4rem',  
    display : 'flex',
    float : 'right', 
    width : '80%', 
  },
  header: {
    paddingBottom : '6rem'
  },
  footer: {
    padding : '16rem'
  }, 
});




function App(props){
    const classes = styles()
      return (
        <Router>
          <div>
            <div className = {classes.header}>
              <NavBar/>
            </div>
            <div>
              <Routes>
                <Route exact path = '/' element = {<StartCard className = {classes.gameInterface}/>}>
                </Route>

                <Route path = '/game' element = {<Game className = {classes.gameInterface}/>}>
                </Route>
              </Routes>
            </div>
            <div className = {classes.footer}> </div>
          </div>
        </Router>
      );
  }



export default App;

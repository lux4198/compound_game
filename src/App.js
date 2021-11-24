import { makeStyles } from '@material-ui/core/styles'
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


// Components

import StartCard from './components/StartCard'
import Game from './components/Game';
import NavBar from './components/NavBar';

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

import { makeStyles } from '@material-ui/core/styles'
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


// Components

import StartCard from './components/StartCard'
import Game from './components/Game';
import NavBar from './components/NavBar';
import ResultsAll from './components/ResultsAll';
import About from './components/About';
import Feedback from './components/Feedback';

const styles = makeStyles({
  gameInterface : { 
    marginRight:'3rem', 
    paddingLeft:'4rem',
    paddingRight:'4rem',  
    display : 'flex',
    float : 'right', 
    width : '90%', 
    minHeight : '250px',  
  },
  header: {
    paddingBottom : '6rem',
    width : '100%'
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
                <Route exact path = '/' element = {<StartCard className = {classes.gameInterface}/>} />
                <Route path = '/game' element = {<Game className = {classes.gameInterface}/>} />
                <Route path = '/results' element = {<ResultsAll className = {classes.gameInterface}/>} />
                <Route path = '/about' element = {<About className = {classes.gameInterface}/>}/>
                <Route path = '/feedback' element = {<Feedback className = {classes.gameInterface}/>}/>
              </Routes>
            </div>
            <div className = {classes.footer}> </div>
          </div>
        </Router>
      );
  }



export default App;

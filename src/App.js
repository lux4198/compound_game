import { createTheme , ThemeProvider, makeStyles } from '@material-ui/core/styles'
import './App.css';
import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { Radio, Button, Grid, Paper, Card, Container } from '@material-ui/core'


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


class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      gameStartButton : false, 
    }

    this.HandleGameStart = this.HandleGameStart.bind(this)
    this.RenderGame = this.RenderGame.bind(this)
    this.GameInterface = this.GameInterface.bind(this)

  }

  HandleGameStart(){

    this.setState(
      {gameStartButton : !this.state.gameStartButton}
    )
  }

  GameInterface(props){

    if (props.gameStartButton){
      return(
        <Game HandleGameStart = {() => {this.HandleGameStart()}} className = {props.className}/>
      )
    }
    else{
      return(
      <StartCard Click = {() => {this.HandleGameStart()}} className = {props.className}/>
      );
    }
    }

  RenderGame(props){
    const classes = styles()
      return (
        <div>
          <div className = {classes.header}>
            <NavBar/>
          </div>
          <this.GameInterface gameStartButton = {props.gameStartButton} className = {classes.gameInterface}/> 
          <div className = {classes.footer}> </div>
        </div>
      );
  }

  render(){
      return (
        <this.RenderGame gameStartButton = {this.state.gameStartButton}/>
        // <Game HandleGameStart = {this.HandleGameStart()}/>
      );
  }
}


export default App;

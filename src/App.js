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


// Icons

import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import { ThreeSixtySharp } from '@material-ui/icons';


const styles = makeStyles({
  wrapper: {
    margin: '1rem',
  },
  card:{
    width:'65%', 
    float:'right',
    marginRight:'6rem', 
    padding:'2rem', 
    paddingBottom : { xs: 3, sm: 3, md: 3, lg : 3 }, 
  },
  grid:{
    display: 'flex', 
    justifyContent: 'center', 
    paddingTop : '2rem',
    paddingBottom : '2rem', 
  },
  gridcontainer:{
    width : '45%', 
    alignItems : 'center', 
    float: 'right', 
    padding : '2rem', 
  },
  griditem: {
    justifyContent: 'center', 
    display: 'flex',   
  }, 
  header: {
    padding : '6rem'
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
        <Game HandleGameStart = {() => {this.HandleGameStart()}}/>
      )
    }
    else{
      return(
      <StartCard Click = {() => {this.HandleGameStart()}}/>
      );
    }
    }

  RenderGame(props){
    const classes = styles()
      return (
        <div>
          <div className = {classes.header}></div>
          <this.GameInterface gameStartButton = {props.gameStartButton}/> 
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

import React, { useState } from "react";
import Input from "./Input";
import { Card, Typography, makeStyles } from "@material-ui/core";
import CustomBtn from "./CustomBtn";

import SendIcon from '@material-ui/icons/Send';
import Results from "./Results";


const styles = makeStyles({
    card:{
        width:'70%', 
        marginRight:'3rem',  
        display : 'flex',
        float : 'right', 
    }, 
    grid:{
        display : 'flex',  
        width : '100%', 
        },
    text: {
        display : 'flex', 
        flexDirection: 'column', 
        width : '60%',
        paddingRight : '4rem',
        paddingLeft:'5rem',
        paddingTop : '4rem',
        paddingBottom : '5rem', 
        borderRight : 'black', 
        borderRightStyle : 'solid', 
    },
    interface : {
        paddingRight : '3rem',
        paddingLeft:'4rem',
        paddingTop : '2rem',
        paddingBottom : '4rem',
        display : 'flex', 
        flexDirection : 'column', 
        float : 'right', 
        width : '40%',
    },  

}); 

// ends the current game cycle  
function EndGameButton(props){
    return(
    <div style = {{display : 'flex', flexDirection : 'row', justifyContent : 'flex-end', paddingBottom : '3rem', }}>
        <div style = {{paddingTop : '1rem'}}>
            <CustomBtn text = 'End Game' color = 'primary'
                        Click = {props.Click}>
            </CustomBtn>
        </div>
    </div>
    )
}

// submits current guess and which triggers HandleSubmit function 
function Submitbutton(){
    return(
    <div style = {{display : 'flex', flexDirection : 'column'}}>
        <div style = {{paddingRight : '2rem', paddingTop : '1rem'}}>
            <CustomBtn text = 'Submit' color = 'secondary' type = 'submit' icon = {<SendIcon />}
                        style = {{paddingLeft : '3rem', paddingRight : '3rem', paddingTop : '0.5rem', paddingBottom : '0.5rem',}}/>
        </div>
    </div>
    )
}


class Game extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            round : {
                current : 1, 
                capital : Math.ceil(Math.random()*10)*1000, 
                years : Math.ceil(Math.random() * 30), 
                interest : Math.ceil(Math.random() * 12),
            },

            seconds : 30,
            intervalID : '',  

            userInput : '', 
            submissionInput : '', 
            
            GameHistory : [],
            displayResult : false, 
        }

        // const result = Math.round((this.state.round.capital * ((1 + (this.state.round.interest/100))**this.state.round.years)))
        
        this.timer = this.timer.bind(this)
        this.GameText = this.GameText.bind(this)
        this.GameCard = this.GameCard.bind(this)
        this.HandleSubmit = this.HandleSubmit.bind(this)
        this.ResetGame = this.ResetGame.bind(this)
        this.RenderResult = this.RenderResult.bind(this)
        this.RenderInterface = this.RenderInterface.bind(this)
        this.saveToHistory = this.saveToHistory.bind(this)

    };

    // creates the countdown timer 
    componentDidMount(){
        var IntervalId = setInterval(this.timer, 1000)
        // store intervalID in state for deletion 
        this.setState({intervalId : IntervalId, 
            })
        }
    
    // resets current countdown timer an creates new state variables for next round 
    // upon submission of valid number the input field is cleared by resetting state.submissionInput
    componentWillUnmount() {
        clearInterval(this.state.intervalId)
     }

    // counts down to zero by changind state.seconds
    // upon reaching 0 the state resets and the next round starts   
    timer() {
        if (this.state.seconds > 0){
            this.setState( { seconds : this.state.seconds -= 1})
        } else {
            this.ResetGame()
            this.componentWillUnmount()
            this.componentDidMount()
        }
    }

    GameText() {
        const classes = styles()
        const result = Math.round((this.state.round.capital * ((1 + (this.state.round.interest/100))**this.state.round.years)))

        return(
    
        <div className = {classes.text}>
            <Typography variant = 'h4' style = {{paddingBottom: '2rem',}}> Example No. {this.state.round.current} - {this.state.seconds} - {result}</Typography>
            <Typography variant = 'h5' style = {{}}> 
            You have {this.state.round.capital} $ in the bank today. <br></br> 
            Your bank will provide you with {this.state.round.interest} % interest per Year. <br></br>
            How much Money will you have after {this.state.round.years} Years? 
            <br></br>
            Good Luck! 
            </Typography>
        </div>
        )
    }

    // resets the game values in state for next round
    ResetGame(){
        this.setState((state) => { 
            return(
                {round : {
                current : this.state.round.current += 1, 
                capital : Math.ceil(Math.random()*10)*1000, 
                years : Math.ceil(Math.random() * 30), 
                interest : Math.ceil(Math.random() * 12),
                },
                seconds : 30,
                submissionInput : ''})
        })}

    // checks if whole number has been submitted, if so next round starts
    HandleSubmit(e){
        e.preventDefault()
        const re = /^[0-9]+$/ 
        if (re.test(this.state.submissionInput)) {
            this.saveToHistory()
            // reset state values
            this.ResetGame()
            
            // reset the timer
            this.componentWillUnmount()
            this.componentDidMount()
            }
        else {
            alert('Please type in a whole number')
        }
        }

    // saves the current round details to GameHistory 
    saveToHistory(){

        this.setState((state) =>{
            const History = state.GameHistory
            const r = state.round
            const result = Math.round((r.capital * ((1 + (r.interest/100))**r.years)))
            if(state.submissionInput != ''){
                return(
                    {GameHistory : History.concat([{current : r.current, capital : r.capital, years : r.years,
                    interest : r.interest, result : result, userInput : state.submissionInput}])})
            }
        })
    }
    
    // displays the Game Interface 
    GameCard(props){
        const classes = styles();
        return(
            <Card  className = {classes.card}>
                <div className = {classes.grid}>
                    <this.GameText/>
                    <div className = {classes.interface}>
                        <EndGameButton Click = {(this.state.round.current === 1) ? props.HandleGameStart : props.RenderResult}/>
                        <form /* noValidate */ autoComplete = 'off' onSubmit = {this.HandleSubmit} style = {{display : 'flex', flexDirection: 'column', }}>
                            <Input style = {{paddingBottom : '2rem'}}  value = {this.state.submissionInput} 
                                    onChange = {(e) => {this.setState({submissionInput : e.target.value})}}
                                    />
                            <Submitbutton/>
                        </form>
                    </div>
                </div>
            </Card>
        );
};

    // trigger if statement in RenderInterface to render results + save last round to GameHistory
    RenderResult(){
        this.componentWillUnmount()
        this.saveToHistory()
        this.setState({
            displayResult : !this.state.displayResult, 
        })
    }

    RenderInterface(props){
        if (this.state.displayResult){
            return(<Results Results = {this.state.GameHistory} HandleGameStart = {() => {
                this.props.HandleGameStart()}} StartNewGame = {() => {this.StartNewGame()}} 
                />
                )
        } else {
           return(<this.GameCard RenderResult = {() => {this.RenderResult()}} HandleGameStart = {() => {
               this.props.HandleGameStart()}}
               />
           )
        }}

    StartNewGame(){
        this.componentDidMount()
        this.setState((state) => {
            return(
                {
            round : {
                current : 1, 
                capital : Math.ceil(Math.random()*10)*1000, 
                years : Math.ceil(Math.random() * 30), 
                interest : Math.ceil(Math.random() * 12),
            },

            seconds : 30,
            intervalID : '',  

            userInput : '', 
            submissionInput : '', 
            
            GameHistory : [],
            displayResult : false, 
        })
    })
    }

    render(){
        return(
            <this.RenderInterface/>
        )
    }
}


export default Game 
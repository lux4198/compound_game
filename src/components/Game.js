import React, { useState } from "react";
import Input from "./Input";
import { Card, Typography, makeStyles } from "@material-ui/core";
import { ThreeSixtySharp } from "@material-ui/icons";
import CustomBtn from "./CustomBtn";

import SendIcon from '@material-ui/icons/Send';


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
                capital : Math.round((Math.random() * 100))*10000, 
                years : Math.round(Math.random() * 30), 
                interest : Math.round(Math.random() * 12), 
            },

            seconds : 30,
            intervalID : '',  

            userInput : '', 
            submissionInput : '',  
        }
        
        this.timer = this.timer.bind(this)
        this.GameText = this.GameText.bind(this)
        this.GameCard = this.GameCard.bind(this)
        this.HandleSubmit = this.HandleSubmit.bind(this)

    };

    // creates the countdown timer 
    componentDidMount(){
        var IntervalId = setInterval(this.timer, 1000)
        // store intervalID in state for deletion 
        this.setState({intervalId : IntervalId})
        }
    
    // resets current countdown timer an creates new state variables for next round 
    // upon submission of valid number the input field is cleared by resetting state.submissionInput
    componentWillUnmount() {
        clearInterval(this.state.intervalId)
        this.setState({userInput : this.state.submissionInput, 
            round : {
                current : this.state.round.current += 1, 
                capital : Math.round(((Math.random() + 0.3) * 10))*10000, 
                years : Math.round(Math.random() * 25) + 1, 
                interest : Math.round(Math.random() * 15) + 1,
            },
            seconds : 30,
            submissionInput : ''})
     }

    // counts down to zero by changind state.seconds
    // upon reaching 0 the state resets and the next round starts   
    timer() {
        if (this.state.seconds > 0){
            this.setState( { seconds : this.state.seconds -= 1})
        } else {
            this.componentWillUnmount()
            this.componentDidMount()
        }
    }

    GameText() {
        const classes = styles()
        return(
    
        <div className = {classes.text}>
            <Typography variant = 'h4' style = {{paddingBottom: '2rem',}}> Example No. {this.state.round.current} - {this.state.seconds}</Typography>
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

    // checks if whole number has been submitted, if so next round starts
    HandleSubmit(e){
        e.preventDefault()
        const re = /^[0-9]+$/ 
        if (re.test(this.state.submissionInput)) {
            this.componentWillUnmount()
            this.componentDidMount()
            }
        else {
            alert('Please type in a whole number')
        }
        }
    
    // displays the Game Interface 
    GameCard(props){
        const classes = styles();

        return(
            <Card  className = {classes.card}>
                <div className = {classes.grid}>
                    <this.GameText/>
                    <div className = {classes.interface}>
                        <EndGameButton Click = {() => {props.HandleGameStart()}}/>
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

    render(){
        return(
            <this.GameCard HandleGameStart = {() => {this.props.HandleGameStart()}}/>
        )
    }
}


export default Game 
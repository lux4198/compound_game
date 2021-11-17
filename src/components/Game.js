import React, { useState } from "react";
import Input from "./Input";
import { Card, Typography, makeStyles } from "@material-ui/core";
import { ThreeSixtySharp } from "@material-ui/icons";
import CustomBtn from "./CustomBtn";


const styles = makeStyles({
    card:{
        width:'70%', 
        marginRight:'3rem', 
        paddingLeft:'4rem',
        paddingRight:'4rem',  
        display : 'flex',
        float : 'right', 
    }, 
    grid:{
        display : 'flex',  
        },
    text: {
        display : 'flex', 
        flexDirection: 'column', 
        width : '100%',
        paddingRight : '4rem',
        paddingTop : '3rem',
        paddingBottom : '4rem', 
        borderRight : 'black', 
        borderRightStyle : 'solid', 
    },
}); 

function EndGameButton(props){
    return(
    <div style = {{display : 'flex', flexDirection : 'column'}}>
        <div style = {{paddingRight : '2rem', paddingTop : '1rem'}}>
            <CustomBtn text = 'End Game' color = 'primary'
                        Click = {props.Click}>
            </CustomBtn>
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

            seconds : 20,
            intervalID : '',  

            userInput : '', 
            submissionInput : '',  
        }
        
        this.timer = this.timer.bind(this)
        this.GameText = this.GameText.bind(this)
        this.GameCard = this.GameCard.bind(this)
        this.HandleSubmit = this.HandleSubmit.bind(this)

    };

    componentDidMount(){
        var IntervalId = setInterval(this.timer, 1000)
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId : IntervalId})
        }
     
    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId)
        this.setState({userInput : this.state.submissionInput, 
            round : {
                current : this.state.round.current += 1, 
                capital : Math.round(((Math.random() + 0.3) * 10))*10000, 
                years : Math.round(Math.random() * 25) + 1, 
                interest : Math.round(Math.random() * 15) + 1,
            },
            seconds : 20,
            submissionInput : ''})
     }

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
            <Typography variant = 'h6' style = {{}}> 
            You have {this.state.round.capital} $ in the bank today. <br></br> 
            Your bank will provide you with {this.state.round.interest} % interest per Year. <br></br>
            How much Money will you have after {this.state.round.years} Years? 
            <br></br>
            Good Luck! 
            </Typography>
        </div>
        )
    }

    Submitbutton(props){
        return(
        <div style = {{display : 'flex', flexDirection : 'column'}}>
            <div style = {{paddingRight : '2rem', paddingTop : '1rem'}}>
                <CustomBtn text = 'Submit' color = 'secondary' type = 'submit'/>
            </div>
        </div>
        )
    }

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

    GameCard(props){
        const classes = styles();

        return(
            <Card  className = {classes.card}>
                <div className = {classes.grid}>
                    <this.GameText/>
                    <EndGameButton Click = {() => {props.HandleGameStart()}}/>
                    <form /* noValidate */ autoComplete = 'off' onSubmit = {this.HandleSubmit}>
                        <Input style = {{padding : '2rem', }}  value = {this.state.submissionInput} 
                                onChange = {(e) => {this.setState({submissionInput : e.target.value})}}
                                />
                        <this.Submitbutton/>
                    </form>
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
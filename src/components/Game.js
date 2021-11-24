import React from "react";
import Input from "./Input";
import { Card, Typography, makeStyles } from "@material-ui/core";
import CustomBtn from "./CustomBtn";
import ResultInterface from "./Results";

import { Link } from "react-router-dom";

// Icons 
import DoubleArrowTwoToneIcon from '@material-ui/icons/DoubleArrowTwoTone';
import SendIcon from '@material-ui/icons/Send';
import TimerIcon from '@material-ui/icons/Timer';




const styles = makeStyles({
    grid:{
        display : 'flex',  
        width : '100%', 
        },
    text: {
        display : 'flex', 
        flexDirection: 'column', 
        width : '80%',
        paddingRight : '4rem', 
        paddingTop : '2.5rem',
        paddingBottom : '5rem', 
        borderRight : 'black', 
        borderRightStyle : 'solid', 
    },
    interface : {
        scale : 0.85, 
        paddingLeft:'3rem',
        display : 'flex', 
        flexDirection : 'column', 
        float : 'right', 
        width : '40%',
    },  

}); 

function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// ends the current game cycle  
function EndGameButton(){
    return(
    <div style = {{display : 'flex', flexDirection : 'row', justifyContent : 'flex-end', paddingBottom : '3rem', }}>
        <div style = {{paddingTop : '1rem'}}>
            <Link to = '/'>
                <CustomBtn text = 'End Game' color = 'primary'/>
            </Link>
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
                        style = {{paddingLeft : '3rem', paddingRight : '3rem', paddingTop : '0.5rem', paddingBottom : '0.5rem',
                                    width : '50%', }}/>
        </div>
    </div>
    )
}


class Game extends React.Component{
    constructor(props){
        super(props)

        // calculate random numbers for different variables in example
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
            
            GameHistory : (localStorage.getItem('games')) ? JSON.parse(localStorage.getItem('games')) : [],
            displayResult : false, 
        }

        // const result = Math.round((this.state.round.capital * ((1 + (this.state.round.interest/100))**this.state.round.years)))
        
        this.timer = this.timer.bind(this)
        this.HandleSubmit = this.HandleSubmit.bind(this)
        this.ResetGame = this.ResetGame.bind(this)
        this.RenderResult = this.RenderResult.bind(this)
        this.saveToHistory = this.saveToHistory.bind(this)
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this)

        this.GameText = this.GameText.bind(this)
        this.GameInput = this.GameInput.bind(this)
        this.GameInterface = this.GameInterface.bind(this)
        this.IntermediateResult = this.IntermediateResult.bind(this)
        this.RenderInterface = this.RenderInterface.bind(this)
        

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
            this.componentWillUnmount()
            this.RenderResult()
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

    // saves the History of the current game to localStorage

    saveToLocalStorage(){
        localStorage.setItem('games', JSON.stringify(this.state.GameHistory))
    }

    // displays example by using .state variables
    GameText() {
        const classes = styles()
        // const result = Math.round((this.state.round.capital * ((1 + (this.state.round.interest/100))**this.state.round.years)))

        return(
    
        <div className = {classes.text}>
            <div style = {{display : 'flex', justifyContent : 'space-between'}}>
                <Typography variant = 'h4' style = {{paddingBottom: '2rem',}}> Example No. {this.state.round.current}</Typography>
                <div style = {{display : 'flex', flexDirection: 'row'}}>
                    <Typography variant = 'h3'>{this.state.seconds}</Typography>
                    <TimerIcon fontSize = 'large'/>
                </div>
            </div>
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

    // displays input interface where user types in guess and can end the game 
    GameInput(){
        const classes = styles();
        return(
            <div className = {classes.interface}>
                <EndGameButton/>
                <form autoComplete = 'off' onSubmit = {this.HandleSubmit} style = {{display : 'flex', flexDirection: 'column', }}>
                    <div>
                        <Input style = {{paddingBottom : '2rem',}}  value = {this.state.submissionInput} 
                                onChange = {(e) => {this.setState({submissionInput : e.target.value})}}
                                />
                    </div>
                    <Submitbutton/>
                </form>
            </div>
        )
    }

    // displays result in between rounds for a short feedback loop 

    IntermediateResult(){
        const classes = styles();
        // go into gameHistory and get previous result and calculate accuracy of submission
        const currentRound = this.state.round
        const result = Math.round((currentRound.capital * ((1 + (currentRound.interest/100))**currentRound.years)))
        let accuracy = 0 
        var a = (Number(this.state.submissionInput) / result);
        (a < 1) ? accuracy += a : accuracy += (1 / (a))

        const continueBtn = (e) => {
            e.preventDefault()
            this.saveToHistory()

            // reset state values
            this.ResetGame()
            
            // reset the timer
            this.componentDidMount()
            
            // reset displayResult to go back to game 
            this.RenderResult()
        }

        return(
            <div className = {classes.interface}>
                <EndGameButton/>
                <div>Submission: {numberWithDots(this.state.submissionInput)}</div>
                <div>Correct Result: {numberWithDots(result)}</div>
                <div>Accuracy: {Math.round(accuracy*100)} %</div>
                <div style = {{display : 'flex', flexDirection : 'row', justifyContent : 'flex-start', paddingTop : '3rem', }}> 
                    <CustomBtn type = 'submit' text = 'Continue' endIcon = {<DoubleArrowTwoToneIcon/>} color = 'secondary'
                                onClick = {continueBtn}/>
                </div>
            </div>
        )
    }
    
    // displays the Game Interface 
    GameInterface(props){
        const classes = styles();
        return(
            <Card  className = {props.className}>
                <div className = {classes.grid}>
                    <this.GameText/>
                    {(this.state.displayResult) ? <this.IntermediateResult/> : <this.GameInput/>}
                </div>
            </Card>
        );
};

    // trigger if statement in RenderInterface to render results + save last round to GameHistory
    RenderResult(){
            this.setState({
                displayResult : !this.state.displayResult })
    }

    // Render GameInterface or ResultInterface depending on state.displayResult
    RenderInterface(props){
        if (this.state.round.current === 3){
            this.saveToLocalStorage()
            this.componentWillUnmount()
            return(<ResultInterface Results = {this.state.GameHistory} StartNewGame = {() => {this.StartNewGame()}} className = {props.className}
                />
                )
        } else {
           return(<this.GameInterface RenderResult = {() => {this.RenderResult()}} className = {props.className}
               />
           )
        }}

    // reset values and start new timer for new game coming from Results
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
            <this.RenderInterface className = {this.props.className}/>
        )
    }
}


export default Game 
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
            current_round : 0,
            userInput : '', 
            submissionInput : '',  
        }

        this.Card = this.Card.bind(this)
        this.HandleSubmit = this.HandleSubmit.bind(this)
    };

    GameText() {
        const classes = styles()
        return(
    
        <div className = {classes.text}>
            <Typography variant = 'h4' style = {{paddingBottom: '2rem',}}> Example No. n </Typography>
            <Typography variant = 'h6' style = {{}}> 
            You have 1000 $ in the bank today. <br></br> 
            On a good contract you will get 10 % interest per Year. <br></br>
            How much Money will you have in 10, 20, 30, 40 Years? 
            <br></br>
            Good Luck! 
            </Typography>
        </div>
        )
    };

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
        const re = /^[0-9\b]+$/ 
        if (re.test(this.state.submissionInput)) {
            this.setState({userInput : this.state.submissionInput})
            }
    }

    Card(props){
        const classes = styles();

        return(
            <Card  className = {classes.card}>
                <div className = {classes.grid}>
                    <this.GameText/>
                    <EndGameButton Click = {() => {props.HandleGameStart()}}/>
                    <form /* noValidate */ autoComplete = 'off' onSubmit = {this.HandleSubmit}>
                        <Input style = {{padding : '2rem', }} onChange = {(e) => {this.setState({submissionInput : e.target.value})}}
                                />
                        <this.Submitbutton/>
                    </form>
                </div>
            </Card>
        );
};

    render(){
        return(
            <this.Card HandleGameStart = {() => {this.props.HandleGameStart()}}/>
        )
    }
}


export default Game 
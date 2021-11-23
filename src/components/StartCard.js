import React from 'react'
import { Typography, Card, makeStyles} from '@material-ui/core'
import CustomBtn from './CustomBtn'
import start_card_expo from '../images/start_card_expo.png';
import { Link } from 'react-router-dom';

const styles = makeStyles({
    grid:{
        display : 'flex',  
        },
    text: {
        display : 'flex', 
        flexDirection: 'column', 
        width : '80%',
        paddingRight : '4rem',
        paddingTop : '3rem',
        paddingBottom : '4rem', 
        borderRight : 'black', 
        borderRightStyle : 'solid', 
    },
    button : {
        display : 'flex', 
        flexDirection : 'column', 
        justifyContent : 'center',
    }
}); 

function StartText() {
    const classes = styles()
    return(

    <div className = {classes.text}>

        <Typography variant = 'h4' style = {{paddingBottom: '2rem',}}> Play The Game </Typography>
        <Typography variant = 'h6' style = {{}}> 
        This game is designed to test Your inutition on compounding effects. <br></br> 
        You will be given 6 different examples that represent a compounding problem. <br></br>
        You have 30 seconds to submit Your best guess for each example. Your Score will be calculated depending on the accuracy of Your submissions.
        <br></br>
        Good Luck! 
        </Typography>
    </div>
    )
};

function StartButton() {
    const classes = styles()
    return(
        <div className = {classes.button}>
            <div style = {{display : 'flex', justifyContent : 'flex-end', }}>
                <Link to = '/game'>
                    <CustomBtn text = 'Play' color = 'secondary'/>
                </Link>
            </div>
            <div style = {{width : '110%' }}>
                <img src = {start_card_expo} style = {{width : '100%', heigth : 'auto',}}></img>
            </div>
        </div>
    )
};  


function StartCard(props) {
    const classes = styles()
    return (
        <Card  className = {props.className}>
            <div className = {classes.grid}>
                <StartText/>
                <StartButton/>
            </div>
        </Card>
    )
}; 

export default StartCard
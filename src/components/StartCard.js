import React from 'react'
import { Typography, Card, makeStyles} from '@material-ui/core'
import CustomBtn from './CustomBtn'
import start_card_expo from '../images/start_card_expo.png';

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
        width : '60%',
        paddingRight : '4rem',
        paddingTop : '3rem',
        paddingBottom : '4rem', 
        borderRight : 'black', 
        borderRightStyle : 'solid', 
    },
}); 

function StartText() {
    const classes = styles()
    return(

    <div className = {classes.text}>

        <Typography variant = 'h4' style = {{paddingBottom: '2rem',}}> Play The Game </Typography>
        <Typography variant = 'h6' style = {{}}> 
        This game is designed to test Your inutition on compounding effects. <br></br> 
        You will be given different examples that represent a compounding problem. <br></br>
        You have 5 seconds to submit Your best guess. Your Score will be calculated depending on the accuracy of Your submissions.
        <br></br>
        Good Luck! 
        </Typography>
    </div>
    )
};

function StartButton(props) {
    return(
        <div style = {{display : 'flex', flexDirection : 'column'}}>
            <div style = {{paddingRight : '2rem', paddingTop : '1rem'}}>
                <CustomBtn text = 'Start' color = 'secondary' style = {{width : '35%', float : 'right'}}
                            Click = {props.Click}>
                </CustomBtn>
            </div>
            <img src = {start_card_expo}></img>
        </div>
    )
};  


function StartCard(props) {
    const classes = styles()
    return (
        <Card  className = {classes.card}>
            <div className = {classes.grid}>
                <StartText/>
                <StartButton Click = {props.Click}/>
            </div>
        </Card>
    )
}; 

export default StartCard
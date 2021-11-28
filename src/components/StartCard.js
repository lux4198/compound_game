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
        width : '90%',
        paddingRight : '2rem',
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

        <Typography variant = 'h4' style = {{paddingBottom: '1rem',}}> Play The Game </Typography>
        <Typography variant = 'h5' align = 'justify' style = {{paddingBlock : '0.2rem'}}> 
            This game is designed to test your inutition on compounding effects.
        </Typography>
        <Typography variant = 'h5' align = 'justify' style = {{paddingBlock : '0.5rem'}}> 
            You will be given 5 different examples that represent a compounding problem.
            You have 30 seconds to submit your best guess for each example.
            Your Score will be calculated depending on the accuracy of your submissions. 
        </Typography>
        <Typography variant = 'h5'>
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
                <img src = {start_card_expo} style = {{width : '100%', heigth : 'auto',}} alt = ''></img>
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
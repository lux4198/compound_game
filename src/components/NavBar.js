import { Toolbar, Typography, makeStyles, Tooltip } from '@material-ui/core'
import React from 'react'   
import { Link } from 'react-router-dom'; 

import start_card_expo from '../images/start_card_expo.png';
import CustomBtn from './CustomBtn';


const styles = makeStyles({
    header: {
        backgroundColor : '#526268',
    },
    bar : { 
        ['@media (max-width: 780px)'] : {
            flexdirection : 'column'
        },
        width : '60%'
    }, 
    homeButton: {
        width: "10%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }, 
        paddingTop : '0.3rem'
    },
    menuItem: {
        flexGrow : 1, 
        display : 'flex',
        justifyContent : 'center', 
    }, 
    menuText: {
        cursor: "pointer", 
        '&:hover': {
            color: '#98aeb7'
        },
        color : 'white', 
    }
})

const aboutTooltip = () => {
    return(
        <Typography variant = 'h5'>
            This is a beginner React project to show my many react skills. <br></br>
            If You have any Feedback feel free to share it with me via email.
            Thank you very much for visiting the website and I hope to see you soon. 
        </Typography>
    )
}

const feedbackTooltip = () => {
    return(
        <Typography variant = 'h5'>
            I hope you were able to improve Your compounding knowledge and intuition.<br></br>
            If you have any feedback or ideas You want to share, feel free to contact us via email. 
            See You soon. 
        </Typography>
    )
}

function NavBar() {
    const classes = styles()
    return (
        <div className = {classes.header}>
            <Toolbar position = 'sticky' color = 'primary' className = {classes.bar}>
                <Link to = '/' className = {classes.homeButton}>
                    <img src = {start_card_expo} style = {{width : '99%'}}></img>
                </Link>

                <Typography variant = 'h5' className = {classes.menuItem} style = {{paddingLeft : '4rem'}}>
                    <Tooltip title = {aboutTooltip()}>
                        <div className = {classes.menuText}>
                            About 
                        </div>
                    </Tooltip>
                </Typography>

                <Typography variant = 'h5' className = {classes.menuItem}>
                    <Tooltip title = {feedbackTooltip()}>
                        <div className = {classes.menuText}>
                            Feedback
                        </div>
                    </Tooltip>
                </Typography>
            </Toolbar>
        </div>
    )
}

export default NavBar

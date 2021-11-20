import { Toolbar, Typography, makeStyles } from '@material-ui/core'
import React from 'react'   

import start_card_expo from '../images/start_card_expo.png';
import CustomBtn from './CustomBtn';


const styles = makeStyles({
    bar : {
        backgroundColor : '#526268', 
        ['@media (max-width: 780px)'] : {
            flexdirection : 'column'
        }
    }, 
    logo: {
        width: "5%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           },
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

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position = 'sticky' color = 'primary' className = {classes.bar}>
            <img src = {start_card_expo} className = {classes.logo} style = {{padding : '1rem'}}></img>

            <Typography variant = 'h5' className = {classes.menuItem} style = {{paddingLeft : '4rem'}}>
                <div className = {classes.menuText}>
                    About
                </div>
            </Typography>

            <Typography variant = 'h5' className = {classes.menuItem}>
                <div className = {classes.menuText}>
                    Career 
                </div>
            </Typography>

            <Typography variant = 'h5' className = {classes.menuItem}>
                <div className = {classes.menuText}>
                    Locations
                </div>
            </Typography>

            <Typography variant = 'h5' className = {classes.menuItem}>
                <div className = {classes.menuText}>
                    Feedback
                </div>
            </Typography>
        </Toolbar>
    )
}

export default NavBar

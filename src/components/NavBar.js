import { Toolbar, Typography, makeStyles } from '@material-ui/core'
import React from 'react'   

import start_card_expo from '../images/start_card_expo.png';
import CustomBtn from './CustomBtn';


const styles = makeStyles({
    bar : {
        backgroundColor : '#c2d9d7', 
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
        cursor: "pointer", 
        flexGrow: 1,
        '&:hover': {
            color: '#581894'
        },
    }, 
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position = 'sticky' color = 'primary' className = {classes.bar}>
            <img src = {start_card_expo} className = {classes.logo} style = {{padding : '1rem'}}></img>

            <Typography variant = 'h5' className = {classes.menuItem} style = {{paddingLeft : '4rem'}}>
                About
            </Typography>

            <Typography variant = 'h5' className = {classes.menuItem}>
                Career
            </Typography>

            <Typography variant = 'h5' className = {classes.menuItem}>
                Demos
            </Typography>
            
            <Typography variant = 'h5' className = {classes.menuItem}>
                Locations
            </Typography>
            <CustomBtn text = 'Log In' color = 'primary'/>
        </Toolbar>
    )
}

export default NavBar

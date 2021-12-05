import { Toolbar, Typography, makeStyles } from '@material-ui/core'
import React from 'react'   
import { Link } from 'react-router-dom'; 

import Logo_000 from '../images/Logo_000.png';
import CustomBtn from './CustomBtn';


const styles = makeStyles({
    header: {
        backgroundColor : '#526268',
    },
    bar : { 
        width : '100%'
    }, 
    homeButton: {
        width: "12%", 
        paddingTop : '0.3rem',
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
        <div className = {classes.header}>
            <Toolbar position = 'sticky' color = 'primary' className = {classes.bar}>
                <Link to = '/' className = {classes.homeButton}>
                    <img src = {Logo_000} style = {{width : '99%'}} alt = ''></img>
                </Link>

                <Typography variant = 'h5' className = {classes.menuItem} style = {{paddingLeft : '4rem'}}>
                    <Link to = '/about' style = {{textDecoration : 'none'}}>
                        <div className = {classes.menuText}>
                            About 
                        </div>
                    </Link>
                </Typography>

                <Typography variant = 'h5' className = {classes.menuItem}>
                    <Link to = '/feedback' style = {{textDecoration : 'none'}}>
                        <div className = {classes.menuText}>
                            Feedback
                        </div>
                    </Link>
                </Typography>

                <Typography variant = 'h5' className = {classes.menuItem}>
                    <Link to = '/results' style = {{textDecoration : 'none', }}>
                        <div className = {classes.menuText}>
                            Results
                        </div>
                    </Link>
                </Typography>

                <div className = {classes.menuItem} style = {{width : '5%'}}>
                    <Link to = '/'  style = {{textDecoration : 'none'}}>
                        <CustomBtn text = 'Start' color = 'secondary'/>
                    </Link>
                </div>

            </Toolbar>
        </div>
    )
}

export default NavBar

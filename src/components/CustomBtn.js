import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Button, makeStyles } from '@material-ui/core';


const styles = makeStyles({
    button:{
        '&:hover': {
          backgroundColor : '#341363', 
        }, 
      }
    });

function CustomBtn(props) {
    const classes = styles()
    return (
        <Button className = {classes.button}
                variant = 'contained'
                onClick = {props.Click} 
                color = {props.color}
                disabled = {props.disabled}
                startIcon = {props.icon}
                >
          <Typography variant = 'h5'>{props.text}</Typography>
        </Button>
    )
}

export default CustomBtn

import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Button, makeStyles } from '@material-ui/core';


const styles = makeStyles({
    primarybutton:{
        '&:hover': {
          backgroundColor : '#9B3344', 
        }, 
      },
    secondarybutton:{
      '&:hover': {
        backgroundColor : '#2E5D68',  
      }, 
    }
  });

function CustomBtn(props) {
    const classes = styles()
    return (
        <Button className = {(props.color === 'primary')? classes.primarybutton : classes.secondarybutton}
                variant = 'contained'
                onClick = {props.Click} 
                color = {props.color}
                disabled = {props.disabled}
                startIcon = {props.icon}
                style = {props.style} 
                type = {props.type}
                >
          <Typography variant = 'h5'>{props.text}</Typography>
        </Button>
    )
}

export default CustomBtn

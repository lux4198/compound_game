import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';


function CustomBtn(props) {
    return (
        <Button 
                variant = 'contained'
                onClick = {props.onClick} 
                color = {props.color}
                disabled = {props.disabled}
                startIcon = {props.icon}
                endIcon = {props.endIcon}
                style = {props.style} 
                type = {props.type}
                >
          <Typography variant = 'h2'>{props.text}</Typography>
        </Button>
    )
}

export default CustomBtn

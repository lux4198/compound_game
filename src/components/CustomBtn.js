import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

function CustomBtn(props) {
    return (
        <Button className = {props.className}
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

import React from 'react'
import { TextField } from '@material-ui/core'


function Input(props) {
    return (
        <TextField variant = 'outlined' color = 'secondary' label = 'Estimate' placeholder = 'Enter Number' 
                     onChange = {props.onChange} autoFocus = {true} 
                    type = 'number' value = {props.value} style = {props.style} size = 'small'
                    inputProps={{style: {fontSize: '1.5rem'}}} InputLabelProps={{style: {fontSize: '1.5rem'}}}/> 
        
        
        )
}

export default Input

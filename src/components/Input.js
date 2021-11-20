import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { PinDropSharp } from '@material-ui/icons'

function Input(props) {
    
    return (
        <TextField variant = 'outlined' color = 'secondary' label = 'Estimate' placeholder = 'Enter Number' 
                    fullWidth onChange = {props.onChange} autoFocus = {true} 
                    type = 'number' value = {props.value} style = {props.style} size = 'medium'/> 
        
        
        )
}

export default Input

import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { PinDropSharp } from '@material-ui/icons'

function Input(props) {
    
    return (
        <div style = {{padding : '1rem', width : '100%'}}>
            <TextField variant = 'outlined' color = 'secondary' label = 'Estimate' placeholder = 'Enter Number'
                        onChange = {props.onChange} autoFocus = {true} 
                        type = 'number' />
        </div> 
        
        
        )
}

export default Input

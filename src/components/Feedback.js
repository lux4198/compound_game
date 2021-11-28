import React from 'react'
import { Typography, Card } from '@material-ui/core'

function Feedback(props) {
    return (
        <Card className = {props.className}>
            <Typography variant = 'h5'>
                I hope you were able to improve Your compounding knowledge and intuition.<br></br>
                If you have any feedback or ideas You want to share, feel free to contact us via email. 
                See You soon. 
            </Typography>
        </Card>
    )
}

export default Feedback

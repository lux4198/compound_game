import React from 'react'
import { Typography, Card } from '@material-ui/core'

function About(props) {
    return (
        <Card className = {props.className}>
            <Typography variant = 'h5'>
                This is a beginner React project to show my many react skills. <br></br>
                If You have any Feedback feel free to share it with me via email.
                Thank you very much for visiting the website and I hope to see you soon. 
            </Typography>
        </Card>
    )
}

export default About

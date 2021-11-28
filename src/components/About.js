import React from 'react'
import { Typography, Card } from '@material-ui/core'

function About(props) {
    return (
        <Card className = {props.className} style = {{flexDirection : 'column' }}>
            <Typography variant = 'h2' style = {{paddingBottom : '2rem', textAlign : 'center'}}>
                About
            </Typography>
            <Typography variant = 'h4' align = 'justify' style = {{paddingBottom : '1rem', }}>
                Exponential behaviour can be found in many forms in our world, e.g. in the stock market or in the spread of pandemics.
                However while people tend to have a very exact intuition on linear effects, when it comes to exponential behaviour, we are often 
                limited in our predictions. 
            </Typography>
            <Typography variant = 'h4' align = 'justify' style = {{paddingBottom : '2rem'}}> 
                This game is meant as a tool to train this intuition and help you get a better feeling of how compounding works. It is not 
                a calculation game, where you are meant to calculate the exact value of a given problem, but more of a guessing game which trains your ability to make 
                precise predictions fast. 
            </Typography>
        </Card>
    )
}

export default About

import React from 'react'
import { Typography, Card } from '@material-ui/core'

function Feedback(props) {
    return (
        <Card className = {props.className} style = {{flexDirection : 'column' }}>
        <Typography variant = 'h2' style = {{paddingBottom : '2rem', textAlign : 'center'}}>
            Feedback
        </Typography>
        <Typography variant = 'h4' align = 'justify' style = {{paddingBottom : '1rem', }}>
            I hope this tool helped you improve your intuition about compounding or was at least fun to try out. 
            Since this is still a new project there are a lot more features that could be added to this site to improve the 
            experience. 
        </Typography>
        <Typography variant = 'h4' align = 'justify' style = {{paddingBottom : '1rem'}}> 
            If you have any ideas concerning overall design or features you would like to see added to the page
            feel free to send them to 'lukas.nittka@gmail.com'. 
        </Typography>
        <Typography variant = 'h4' align = 'justify' style = {{paddingBottom : '0.5rem'}}> 
            If you want to check out the code for this site, go to this repository.
        </Typography>
        <Typography variant = 'h4' align = 'justify' style = {{paddingBottom : '3rem'}}> 
            <a href = 'https://github.com/lux4198/compound_game'>https://github.com/lux4198/compound_game</a>
        </Typography>
    </Card>
    )
}

export default Feedback

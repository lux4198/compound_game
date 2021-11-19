import { makeStyles, Card, Typography } from '@material-ui/core'
import { ThreeSixtySharp } from '@material-ui/icons';
import React from 'react'


// components
import CustomBtn from './CustomBtn';
import Input from './Input';

const styles = makeStyles({
    card:{
        width:'70%', 
        marginRight:'3rem',  
        display : 'flex',
        float : 'right',
    },
    grid : {
        display : 'flex', 
        width : '100%'
    },
    interface : {
        paddingRight : '3rem',
        paddingLeft:'4rem',
        paddingTop : '2rem',
        paddingBottom : '4rem',
        display : 'flex', 
        flexDirection : 'column', 
        float : 'right', 
        width : '40%',
    },  
    text: {
        display : 'flex', 
        flexDirection: 'column', 
        width : '60%',
        paddingRight : '4rem',
        paddingLeft:'5rem',
        paddingTop : '4rem',
        paddingBottom : '5rem', 
        borderRight : 'black', 
        borderRightStyle : 'solid', 
    },  



}); 

class Results extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hello : 'there',
        }
        
        this.CalculateResult = this.CalculateResult.bind(this)
        this.GameText = this.GameText.bind(this)
        this.ResultCard = this.ResultCard.bind(this)
    }

    CalculateResult(props){
        const results = props.Results
        let accuracy = 0

        results.forEach(element => {
            if (element['userInput'] != ''){
                var a = (Number(element['userInput']) / element['result']);
                (a < 1) ? accuracy += a : accuracy += (1 / (a))
            }})

        accuracy = (accuracy/(results.length)) 

        return(Math.round(accuracy*100))
    }

    GameText(props) {
        const classes = styles()
    
        return(
    
        <div className = {classes.text}>
            <Typography variant = 'h4' style = {{paddingBottom: '2rem',}}>Your Results</Typography>
            <Typography variant = 'h5' style = {{}}> 
            Your Guesses were on average <this.CalculateResult Results = {props.Results}/> % accurate. <br></br> 
            For more details please click the button below. <br></br>
            Feel free to try again in another round. 
            <br></br>
            Good Luck! 
            </Typography>
        </div>
        )
    }

    ResultCard(props) {
        const classes = styles();
            return(
                <Card  className = {classes.card}>
                    <div className = {classes.grid}>
                        <this.GameText Results = {props.Results}/>
                        <div className = {classes.interface}>
                            <CustomBtn Click = {props.HandleGameStart} text = 'Go To Start' color = 'primary'/>
                            <form /* noValidate */ autoComplete = 'off' /* onSubmit = {this.HandleSubmit} */ style = {{display : 'flex', flexDirection: 'column', paddingTop : '4rem', }}>
                                <CustomBtn text = 'Play Again' color = 'secondary' Click = {props.StartNewGame}/>
                            </form>
                        </div>
                    </div>
                </Card>
        )
    }

    render(){
        return(
            <this.ResultCard Results = {this.props.Results} HandleGameStart = {() => {this.props.HandleGameStart()}}
            StartNewGame = {() => {this.props.StartNewGame()}} 
            />
        )
    }
}

export default Results

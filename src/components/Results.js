import { makeStyles, Card, Typography } from '@material-ui/core'
import React from 'react'


// components
import CustomBtn from './CustomBtn';

// icons 
import { ThreeSixtySharp } from '@material-ui/icons';
import { Link } from 'react-router-dom';

// this is the interface for the end of a game, dont confuse with Resultsall which renders the gameHistory and has its own page

const styles = makeStyles({
    grid : {
        display : 'flex', 
        width : '100%'
    },
    interface : {
        scale : 0.9, 
        display : 'flex', 
        flexDirection : 'column', 
        justifyContent: 'space-around', 
        alignItems : 'center', 
        width : '30%',
        paddingLeft : '2rem', 
    },  
    text: {
        display : 'flex', 
        flexDirection: 'column', 
        width : '70%',
        paddingRight : '2rem',
        paddingTop : '4rem',
        paddingBottom : '5rem', 
        borderRight : 'black', 
        borderRightStyle : 'solid', 
    },  



}); 

function CalculateResult(Results){
    const results = Results
    let accuracy = 0

    results.forEach(element => {
        if (element){
            var a = (Number(element['userInput']) / element['result']);
            (a < 1) ? accuracy += a : accuracy += (1 / (a))
        }
        else{
            return(
                console.log('return')
            )
        }})

    accuracy = (accuracy/(results.length)) 

    return(Math.round(accuracy*100))
}

class ResultInterface extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
        
        this.GameText = this.GameText.bind(this)
        this.ResultCard = this.ResultCard.bind(this)
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this)
    }


    componentDidMount(){
        this.saveToLocalStorage()
    }
    // saves the History of the current game to localStorage
    saveToLocalStorage(){
        let existingEntry = localStorage.getItem('games')
        console.log('entry', existingEntry)

        if (existingEntry == null){
            existingEntry = JSON.stringify([])
        }
        
        localStorage.setItem('games', JSON.stringify(JSON.parse(existingEntry).concat(this.props.Results)))
        
        console.log(JSON.parse(localStorage.getItem('games')))
    }

    GameText(props) {
        const classes = styles()
        return(
    
        <div className = {classes.text}>
            <Typography variant = 'h3' style = {{paddingBottom: '1rem',}}>Your Results</Typography>
            <Typography variant = 'h4' style = {{paddingBottom: '1rem',}}> Your Guesses were on average {CalculateResult(props.Results)} % accurate. </Typography>
            <Typography variant = 'h5'> 
            Checkout the Results page for more details on your game history. <br></br>
            Feel free to try again in another round. 
            </Typography>
        </div>
        )
    }

    ResultCard(props) {
        const classes = styles();

            return(
                <Card  className = {props.className}>
                    <div className = {classes.grid}>
                        <this.GameText Results = {props.Results}/>
                        <div className = {classes.interface} >
                            <Link to = '/results'>
                                <CustomBtn text = 'Go To Results' color = 'primary' />
                            </Link>
                            <CustomBtn text = 'Play Again' color = 'secondary' onClick = {props.StartNewGame} icon = {<ThreeSixtySharp/>}/>
                        </div>
                    </div>  
                </Card>
        )
    }

    render(){
        return(
            <this.ResultCard Results = {this.props.Results} StartNewGame = {() => {this.props.StartNewGame()}} className = {this.props.className}/>
        )
    }
}

export default ResultInterface
export {CalculateResult}

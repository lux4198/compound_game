import React, { useState } from 'react'
import { makeStyles, Typography, Card, Accordion, AccordionDetails, AccordionSummary, Popper } from '@material-ui/core';
import {CalculateResult} from './Results'

import { Link } from 'react-router-dom';

import {ExpandMore} from '@material-ui/icons'
import CustomBtn from './CustomBtn';

const styles = makeStyles({
    
}); 

function AccordionObject(props){
    if (props.text == undefined){
        return('No Result')
    }
    const text = JSON.parse(props.text)
    return(
        <Accordion> 
            <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography style = {{width : '15%'}}>{props.header}</Typography>
            <Typography style = {{ color: '#526268' }}>{props.subheader}</Typography>
            </AccordionSummary>
            <AccordionDetails style = {{display : 'flex', flexDirection : 'column',  }}>
                <table>
                    <thead>
                        <tr>
                            <th>Round</th>
                            <th>Capital</th>
                            <th>Interest</th>
                            <th>Years</th>
                            <th>Result</th>
                            <th>Submission</th>
                            <th>Accuracy</th>
                        </tr>
                    </thead>
                    <tbody style = {{textAlign : 'center', }}>
                        {text && text.map(round =>
                            <tr key={round.current}>
                                <td>{round.current}</td>
                                <td>{round.capital} $</td>
                                <td>{round.interest} %</td>
                                <td>{round.years} </td>
                                <td>{round.result} </td>
                                <td>{(round.userInput !== '')? round.userInput : 'Timeout'} </td>
                                <td>{round.accuracy} %</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </AccordionDetails>
        </Accordion>
    )
}

function ResultsAll(props) {
    const classes = styles()
    const [localData, setLocalData] = useState(localStorage.getItem('games'))
    if (localData == null){
        return(
            <div style = {{display : 'flex', justifyContent : 'center', width : '100%', }}>
                <Card  className = {props.className} style = {{width : '80%', marginRight : 0,  }}>
                    There are no results here yet. <br></br>
                    Play the game to test Your skills!
                    
                </Card>
            </div>
            )
    }
    var parsedData = JSON.parse(localData)
    
    var GameResults = []
    for (var i = 0; i < parsedData.length; i += 5){
        var Results = []
            for (var j = 0; j < 5; j += 1){
                Results.push(parsedData[i + j])
            }
            GameResults.push(Results)
        }
    return (
        <div style = {{display : 'flex', justifyContent : 'center', width : '100%', }}>
            <Card  className = {props.className} style = {{width : '80%', marginRight : 0, flexDirection : 'column', paddingTop : '2rem', paddingBottom : '2rem', }}>
                <div style = {{paddingBottom : '1rem', }}>
                    <CustomBtn onClick = {() => {setLocalData(); localStorage.clear()}} text = 'Clear Results' color = 'primary' style = {{width : '20%', float : 'right'}}/>
                </div>
                <div>
                    {GameResults.map((element) => 
                        <AccordionObject header = {'Game ' + (GameResults.indexOf(element) + 1)}
                        subheader = {'Overall Accuracy: ' + CalculateResult(element) + '%'} text = {JSON.stringify(element)}/>)}
                </div>
            </Card>
        </div>
    )
}

export default ResultsAll

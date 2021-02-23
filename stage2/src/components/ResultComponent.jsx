import React, { Component } from 'react';
import './Components.css';
import {BrowserRouter, Link} from 'react-router-dom';
import service from './service.js';
export default class ResultComponent extends Component {
    constructor(props){
        super(props);
        this.state={score:0}
    }
    componentDidMount(){
        this.score=service.sharedData;
        console.log(this.score);
        console.log(service.sharedData);
        this.setState({score:service.sharedData});
    }
    
    render(){
    return(
    <div className="resultComponent">
        <h1 className="resMain">Result</h1>
    <div className="state">
        <h2 className="statehead">You need more practice!</h2>
        <h2 className="statescore">Your Score: {this.state.score*100/15}</h2>
        <div className="statedetmarks">
            <div className="statedetails">
            <span>Total number of questions </span>
            <span>Number of attempted questions </span>
            <span>Number of correct answers</span>
            <span>Number of wrong answers </span>
            </div> 
            <div className="statemarks">
                <span>15</span>
                <span>15</span>
                <span>{this.state.score}</span>
                <span>{this.state.score}</span>
            </div>
        </div>
    </div>
    <div className="resbtn">
        <button className="playbtn"><Link to='/QuizComponent'>Play Again</Link></button>
        <button className="backbtn" ><Link to='/'>Back to Home</Link></button>
    </div>
</div>);
    }
}

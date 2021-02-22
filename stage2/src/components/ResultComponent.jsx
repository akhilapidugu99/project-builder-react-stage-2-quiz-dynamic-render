import React, { Component } from 'react';
import './Components.css'
export default function Result() {
    return(
    <div className="resultComponent">
        <h1 className="resMain">Result</h1>
    <div className="state">
        <h2 className="statehead">You need more practice!</h2>
        <h2 className="statescore">Your Score: 20%</h2>
        <div className="statedetmarks">
            <div className="statedetails">
            <span>Total number of questions</span>
            <span>Number of attempted questions</span>
            <span>Number of correct answers</span>
            <span>Number of wrong answers</span>
            </div> 
            <div className="statemarks">
                <span>15</span>
                <span>9</span>
                <span>3</span>
                <span>6</span>
            </div>
        </div>
    </div>
    <div className="resbtn">
        <button className="playbtn">Play Again</button>
        <button className="backbtn">Back to Home</button>
    </div>
</div>);
}
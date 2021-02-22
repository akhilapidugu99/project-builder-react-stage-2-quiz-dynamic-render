import React, { Component } from 'react';
import './Components.css';
import './QuizComponent.jsx';

class HomeComponent extends Component {
    render() {
        return(
        <div className="homeComponent">
                <h1>Quiz App</h1>
                <div>
                    <button className="play">Play</button>
                </div>
            </div>
        );
    }
}

export default HomeComponent;
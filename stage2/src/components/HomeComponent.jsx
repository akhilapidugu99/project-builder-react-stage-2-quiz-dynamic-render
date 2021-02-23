import React, { Component } from 'react';
import './Components.css';
import './QuizComponent.jsx';
import {BrowserRouter,Link} from 'react-router-dom';

class HomeComponent extends Component {
    render() {
        return(
        <div className="homeComponent">
                <h1>Quiz App</h1>
                <div>
                    <button className="play"><Link to='/QuizComponent'>Play</Link></button>
                </div>
            </div>
        );
    }
}

export default HomeComponent;
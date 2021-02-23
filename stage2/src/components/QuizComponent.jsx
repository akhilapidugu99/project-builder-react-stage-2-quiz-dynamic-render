import React, { Component } from 'react';
import './Components.css';
import {BrowserRouter, Link } from 'react-router-dom';
import questions from'./questions.json';


class QuizComponent extends Component {
    constructor(props){    
        super(props);
    this.state={
        questionno:0,
        quest:[...questions]
        };
    }
    previousHandler=()=>{
        this.setState({questionno:this.state.questionno-1});        
    }
    nextHandler=()=>{
        this.setState({questionno:this.state.questionno+1});
    }
   

    render() {
        var val=this.state.quest[this.state.questionno];
        return(
        <div>
               <div className="quizComponent">
                   <div className="question">
                   <h1>Question</h1>
                   <div className="para">{val.question}</div>
                   <div className="option">
                       <button className='val'>{val.optionA}</button>
                       <button className='val'>{val.optionB}</button>
                   </div><br/>
                   <div className="option">
                      <button className='val'>{val.optionC}</button>
                       <button className='val'>{val.optionD}</button>
                   </div>
                   <br/>
                   <div className="btn">
                        <button className="b1" onClick={this.previousHandler}> Previous</button>
                        <button className="b2" onClick={this.nextHandler}>Next</button>
                        <button className="b3" ><Link to='/'>Quit</Link></button>
                   </div>
                   </div>
               </div> 
            </div>
        );
    }
}

export default QuizComponent;
import React, { Component } from 'react';
import './Components.css';
import questions from'./questions.json';
import ResultComponent from './ResultComponent';
import {BrowserRouter,Link} from 'react-router-dom';
import service from './service.js';
export default class QuizComponent extends Component {
    constructor(props){    
        super(props);
    this.state={
        questionno:0,
        quest:[...questions],
        score:0
        };
    }
    previousHandler=()=>{
        if(this.state.questionno>=1){
        this.setState({questionno:this.state.questionno-1}); }       
    }
    nextHandler=()=>{
        this.setState({questionno:this.state.questionno+1});
        // if(this.state.questionno===14){
            
        // }
    }
    checkOption = (e) => {
        e.preventDefault()
        var ans = e.target.value;
        var correctans = this.state.quest[this.state.questionno].answer;
        var result = ans.localeCompare(correctans);
        if(result===0){
            service.sharedData=this.state.score+1;
            console.log(service.sharedData);
            this.setState({score:this.state.score+1});}
    }

    render() {
        const count_ques = this.state.questionno;
        var val=this.state.quest[this.state.questionno];
        return(  
        <div>
             {count_ques < 15 &&
               <div className="quizComponent">
                   <div className="question">
                   <h1>Question</h1>
                   <div className="para">{val.question}</div>
                   <div className="option">
                       <button className='val' value={val.optionA} onClick={e=>this.checkOption(e,val.optionA)}>{val.optionA}</button>
                       <button className='val'value={val.optionB}  onClick={e=>this.checkOption(e,val.optionB)}>{val.optionB}</button>
                   </div><br/>
                   <div className="option">
                      <button className='val' value={val.optionC}  onClick={e=>this.checkOption(e,val.optionC)}>{val.optionC}</button>
                       <button className='val' value={val.optionD} onClick={e=>this.checkOption(e,val.optionD)}>{val.optionD}</button>
                   </div>
                   <br/>
                   <div className="btn">
                        <button className="b1" onClick={this.previousHandler}> Previous</button>
                        <button className="b2" onClick={this.nextHandler}>Next</button>
                        <button className="b3"><Link to={'/'}>Quit</Link></button>
                   </div>
                   </div>
               </div> }
               {count_ques > 15 && alert("Quiz has ended")}
            </div>
        );
    }
}


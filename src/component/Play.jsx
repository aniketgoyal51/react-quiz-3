import React, { Component } from 'react'
// import data from '../Resources/quizQuestion.json'
import data from "../Resources/quizQuestion.json"
import Result from './Result'

class Play extends Component {
  constructor(){
    super()
    this.state={
      questions:1,
      toggle:true,
      count:0,
      score:1
    }
  }

  handlenext=()=>{
    if(this.state.questions<15){
    this.setState({questions: this.state.questions+1})
  }else if(this.state.questions==15){
    this.setState({toggle: !this.state.toggle})
  }
  }
  handleprev=()=>{
    if(this.state.questions>0){
      this.setState({questions:this.state.questions-1})
    }
  }

  handlefinish=()=>{
    this.setState({toggle: !this.state.toggle})
  }

  handlequit=()=>{
    confirm('Are you sure you want to quit ?')
  }

  handleanswer=(e)=>{
    if(e.target.innerText===data[this.state.questions-1].answer){
      this.setState({score: this.state.score+1})
      this.setState({questions: this.state.questions+1})
      this.setState({count: this.state.count+1})
      // alert("Correct question")
    }
  else{
    this.setState({questions: this.state.questions+1})
    this.setState({count: this.state.count+1})
    alert("Wrong question")
  }
  if(this.state.questions ==15){
    this.setState({toggle: !this.state.toggle})
  }
  
}

render() {
    return (
      <>
      {this.state.toggle?
        <>
        <div className='quizbox'>
          <h1>Question</h1>
          <h4>{this.state.questions} of 15</h4>
            <div>
              <h3>{data[this.state.questions-1].question}</h3>
              <div className='optionbox'>
                <button className='option' onClick={(e)=>this.handleanswer(e)}>{data[this.state.questions-1].optionA}</button>
                <button className='option' onClick={(e)=>this.handleanswer(e)}>{data[this.state.questions-1].optionB}</button>
                <button className='option' onClick={(e)=>this.handleanswer(e)}>{data[this.state.questions-1].optionC}</button>
                <button className='option' onClick={(e)=>this.handleanswer(e)}>{data[this.state.questions-1].optionD}</button>
              </div>
          <div className='buttons'>
            <button className='prev' onClick={this.handleprev}>Previous</button>
            <button className='next' onClick={this.handlenext}>Next</button>
            <button className='quit' onClick={this.handlequit}>Quit</button>
            <button className='finish' onClick={this.handlefinish}>Finish</button>
          </div>
            </div>
        </div>
        </>
        :
        <Result scores={this.state.score} counts={this.state.count}/>
      }
    </>
    )
  }
}

export default Play
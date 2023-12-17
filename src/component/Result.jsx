import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Play from './Play'

export default class Result extends Component {
  constructor(props){
    super(props)
    this.state={
      score: this.props.scores,
      count:this.props.counts,
      toggle:true
    }
  }

  handleagain=()=>{
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    const percent=(((this.state.score-1)/15)*100)
    return (
    <>
      {this.state.toggle?
      <>
        <div>
        <h1 className='result'>Result</h1>
        <div className='resultbox'>
            <h3>You need more practice</h3>
            <h2 className='score'>Your score is {percent.toFixed(2)}%</h2>
            <div className='statistics'>
                <div className='statisticname'>
                    <p>Total number of questions</p>
                    <p>Number of attempted questions</p>
                    <p>Number of currect answers</p>
                    <p>Number of wrong answers</p>
                </div>
                <div className='statisticscore'>
                    <p>15</p>
                    <p>{this.state.count}</p>
                    <p>{this.state.score-1}</p>
                    <p>{this.state.count-(this.state.score-1)}</p>
                </div>
            </div>
        </div>
        <div className='endbuttons'>
            <button className='playagain' onClick={this.handleagain}>Play Again</button>
            <Link to="/"><button className='backhome'>Back to home</button></Link>
        </div>
      </div>
      </>
      :
      <Play/>
    }
    </>
    )
  }
}

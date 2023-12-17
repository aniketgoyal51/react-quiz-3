
// import Play from './component/Play.jsx'
// import Result from './component/result.jsx'
import { Link } from 'react-router-dom'

import React, { Component } from 'react'

class Home extends Component {
    constructor(){
        super()
        this.state={
        toggle:true
    }
    }

    handletoggle=()=>{
    this.setState({toggle: !this.state.toggle})
    }

    render() {
    return (
    <>
        <div className='Head'>Quiz App</div>
        <Link to="/play"> <button onClick={this.handletoggle} className='button'>Play</button></Link>
    </>
    )
}
}


export default Home

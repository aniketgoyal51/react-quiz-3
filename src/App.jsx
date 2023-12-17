import React, { Component } from 'react'
import Home from './component/Home'
import { Route, Routes } from 'react-router-dom'
import Play from './component/Play'
import './app.css'


export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/play' element={<Play/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </>
    )
  }
}

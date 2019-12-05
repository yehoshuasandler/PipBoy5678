import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import TopNav from './components/common/TopNav/TopNav'
import BottomStatus from './components/common/BottomStatus/BottomStatus'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <TopNav />
        <BottomStatus />
      </div>
    )
  }
}

export default App

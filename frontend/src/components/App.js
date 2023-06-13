import React from 'react'
import '../styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainRouter from './MainRouter'


function App() {

  return (
    <>
    <div className="App">
      <MainRouter/>
      </div>
    </>
  )
}

export default App
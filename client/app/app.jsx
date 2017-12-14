import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {AppHeader} from './appHeader/appHeader.jsx'
import {AppBody} from './appBody/appBody.jsx'
import './app.scss';

export class App extends React.Component{
  render(){
    return (
      <Router>
        <div className='app-container'>
          <AppHeader></AppHeader>
          <AppBody></AppBody>
        </div>
      </Router>
    )
  }
}
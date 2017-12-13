import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {AppHeader} from './appHeader/appHeader.jsx'
import {AppBody} from './appBody/appBody.jsx'

const App = () => (
  <Router>
    <div>
      <AppHeader></AppHeader>
      <AppBody></AppBody>
    </div>
  </Router>
)

ReactDOM.render(<App/>, document.getElementById('app'));
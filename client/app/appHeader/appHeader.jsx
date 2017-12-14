import React from 'react';
import {NavLink} from 'react-router-dom';
import './appHeader.scss';

export class AppHeader extends React.Component {
  render(){
    return (
      <nav className='app-header'>
        <ul className="app-header_ul">
          <li className="app-header_ul_li">
            <NavLink className="app-header_ul_li_NavLink" activeClassName="--active" exact to="/">Home</NavLink>
          </li>
          <li className="app-header_ul_li">
            <NavLink className="app-header_ul_li_NavLink" activeClassName="--active" to="/about">About</NavLink>
          </li>
          <li className="app-header_ul_li">
            <NavLink className="app-header_ul_li_NavLink" activeClassName="--active" to="/topics">Topics</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
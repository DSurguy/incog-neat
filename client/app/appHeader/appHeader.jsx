import React from 'react';
import {NavLink} from 'react-router-dom';
import './appHeader.scss';

export class AppHeader extends React.Component {
  state = {
    user: this.props.user
  }
  
  render(){
    return (
      <nav className='app-header'>
        <ul className="app-header_ul">
          <li className="app-header_ul_li">
            <NavLink className="app-header_ul_li_NavLink" activeClassName="--active" exact to="/">Dashboard</NavLink>
          </li>
          <li className="app-header_ul_li">
            {this.props.user.session ? (
              <NavLink className="app-header_ul_li_NavLink" to="/login">Logout</NavLink>
            ) : ( 
              <NavLink className="app-header_ul_li_NavLink" to="/logout">Login</NavLink>
            )}
          </li>
        </ul>
      </nav>
    )
  }
}
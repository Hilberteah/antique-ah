import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  constructor(){
    super()

  
  }
  render(){
    return(
      <div className ="nav-wrapper" >
        <div className='nav-link-wrapper'>
            <NavLink to="/contact" activeClassName="nav-link-active">Contact Us</NavLink>
        </div>
        <div className='nav-link-wrapper'>
            <NavLink exact to="/" activeClassName="nav-link-active">Shop</NavLink>
        </div>
        <div className='nav-link-wrapper'>
            <NavLink to="/cart" activeClassName="nav-link-active">Cart</NavLink>
        </div>
      </div>
    )
  }

}


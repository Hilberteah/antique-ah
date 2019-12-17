import React, { Component } from "react";
import Bg from "../../../static/assets/images/backgrounds/etienne-martin-v6uiP2MD6vs-unsplash.jpg";
import Bg2 from "../../../static/assets/images/backgrounds/bg2.jpg";
import Bg3 from "../../../static/assets/images/backgrounds/bg3.jpg";
import Bg4 from "../../../static/assets/images/backgrounds/bg4.jpg";
import Bg5 from "../../../static/assets/images/backgrounds/bg5.jpg";
import logo from "../../../static/assets/images/logos/logo2.png";




export default class Header extends Component {
  constructor(){
    super()

  
  }
  render(){
    return(
      <div className ="header" 
      style={{ backgroundImage: `url(${Bg5})`}}
      >
          <img src= "../../../static/assets/images/logos/logo2.png" /> 
      </div>
    )
  }

}

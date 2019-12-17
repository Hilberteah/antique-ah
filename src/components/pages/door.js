import React, { Component } from "react";
import Bg from "../../../static/assets/images/backgrounds/door.jpg";



export default class Door extends Component {
  constructor(){
    super()

    this.state={
        display: "block"
    };

    this.changeDisplay=this.changeDisplay.bind(this)
    this.componentDidMount=this.componentDidMount.bind(this)
    
}

    changeDisplay() {
        this.setState({
            display:"none"
        })
    }


    componentDidMount() {
        setTimeout(() => {
            this.changeDisplay()
            
        }, 2450);

    }

  
  render(){
    return(
        <div className='door'>
            <img  style={{display:this.state.display}} src= "../../../static/assets/images/backgrounds/door.jpg" /> 
        </div>
     
    )
  }

}

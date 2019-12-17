import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css' 



import Header from "./pages/header";
import Footer from "./pages/footer";
import Navbar from "./pages/navbar";
import Modal from './modal'
import Shop from "./pages/shop";
import Contact from './pages/contact'
import CartPage from "./pages/cartPage";
import Door from "./pages/door";
import ProductList from "./productList";
import Details from "./details";
import Cart from "./Cart/cart";
import Default from "./default";
import {ProductProvider} from '../context'



library.add(faCartPlus,faTrash)



export default class App extends Component {
  constructor(){
    super()

    this.state={
        display: "0"
    };

    this.changeDisplay=this.changeDisplay.bind(this)
    this.componentDidMount=this.componentDidMount.bind(this)
    
}

    changeDisplay() {
        this.setState({
            display:"100"
        })
    }


    componentDidMount() {
        setTimeout(() => {
            this.changeDisplay()
            
        }, 200);

    }

  
  
  
  
  render() {
    return (
      <div className='app'>
        <ProductProvider>
        <Router>
          <div >
            <div className='garage-door'>
              <Door/>
            </div>
            <div style={{opacity:this.state.display}} className='all-content'>
            <div className='top-half'>
              <Header/>
              <Navbar/>

            </div>
            
            <Modal/>
            <Switch>
              <div className="nav-links">
                <Route exact path="/" component={ProductList}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/cart" component={CartPage}/>
                <Route path="/details" component={Details}/>
              </div>
            </Switch>
            {/* <Footer/> */}

            </div>
          </div>
        </Router>
        </ProductProvider>
      </div>
    );
  }
}

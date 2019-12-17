import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Content extends Component {
  render() {
    return (
      <div className='contact-wrapper'>
        <div className="address">
          <div className='address-header'>
            <FontAwesomeIcon className='mole' icon='circle' />
            <h1>Questions? Call us at 1(444)444-4444</h1>
            <FontAwesomeIcon className='mole' icon='circle' />
          </div>
          <div className='address-header'>
            <FontAwesomeIcon className='mole' icon='circle' />
            <h1>You can stop in our shop at 465 S. Merrill Ave</h1>
            <FontAwesomeIcon className='mole' icon='circle' />
          </div>
          <div className='map-wrapper'>
          <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1656.8124308925292!2d-104.71835190371618!3d47.09965869798007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5325273b6646eb3d%3A0x688a24fa68d23d40!2s465%20S%20Merrill%20Ave%2C%20Glendive%2C%20MT%2059330!5e1!3m2!1sen!2sus!4v1575392396153!5m2!1sen!2sus" ></iframe>
          
          </div>
          <div className='address-header'>
            <FontAwesomeIcon className='mole' icon='circle' />
            <h1>Or Email us below!</h1>
            <FontAwesomeIcon className='mole' icon='circle' />
          </div>
        </div>

      </div>
    );
  }
}

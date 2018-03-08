import React, {Component} from 'react';
import VLogo from '../assets/whitevergelogo.png';

export default class Header extends Component {

  render(){
    return(
      <div className="outtie">
        <div className="hero">
          <img src={VLogo} alt="The Verge Logo" className="logo"/>
          <p className="herotext">THURSDAY, JUNE 18TH, 2043 | WE ARE PRETTY FAR INTO THE FUTURE HUH?</p>
        </div>
      </div>
    )
  }
}
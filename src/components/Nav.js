import React, {Component} from 'react';
import NavDropdown from './NavDropdown';

export default class Nav extends Component{

  render(){
    return(
      <div className="nav">
        <div className="bigholder">
          <div className="holder">
            <NavDropdown title={'TECH'} options={['Apple', 'Apps', 'Business', 'Google', 'Photography', 'Design', 'Microsoft', 'Virtual Reality']} />
            <NavDropdown title={'SCIENCE'} options={['Space', 'Engergy', 'Health', 'Enviroment']} />
            <NavDropdown title={'CULTURE'} options={['Web', 'Games', 'TV', 'Comics', 'Film', 'Music']} />
            <NavDropdown title={'CARS'} options={['Ride-Sharing', 'Aviation', 'Cars', 'Rideables', 'Mass Transit', 'Autonomy']} />
            <NavDropdown title={'REVIEWS'} options={['Phones', 'Tablets', 'VR Headsets', 'Laptops', 'Headphones', 'Next', 'Cameras', 'Smartwatches']} />
            <NavDropdown title={'LONGFORM'} options={[]} />
            <NavDropdown title={'VIDEO'} options={[]} />
            <NavDropdown title={'CIRCUIT BREAKER'} options={[]} />
            <NavDropdown title={'FORUMS'} options={[]} />
            <NavDropdown title={'MORE'} options={['PODCASTS', 'STORE']} />
          </div>
          <div className="holder">
            <i className="fab fa-facebook-f p"></i>
            <i className="fab fa-twitter p"></i>
            <i className="fas fa-wifi p"></i>
          </div>
          <div className="holder">
            <i className="fas fa-user w"></i>
            <i className="fas fa-search w"></i>
          </div>
        </div>
      </div>
    )
  }
}
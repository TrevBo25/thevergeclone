import React, {Component} from 'react';
import NavDropdown from './NavDropdown';

export default class Nav extends Component{

  render(){
    return(
      <div className="nav">
        <div className="bigholder">
          <div className="holder">
            <NavDropdown title={'TECH'} options={[]} />
            <NavDropdown title={'SCIENCE'} options={[]} />
            <NavDropdown title={'CULTURE'} options={[]} />
            <NavDropdown title={'CARS'} options={[]} />
            <NavDropdown title={'REVIEWS'} options={[]} />
            <NavDropdown title={'LONGFORM'} options={[]} />
            <NavDropdown title={'VIDEO'} options={[]} />
            <NavDropdown title={'CIRCUIT BREAKER'} options={[]} />
            <NavDropdown title={'FORUMS'} options={[]} />
            <NavDropdown title={'MORE'} options={[]} />
          </div>
          <div className="holder">
            <i class="fab fa-facebook-f p"></i>
            <i class="fab fa-twitter p"></i>
            <i class="fas fa-wifi p"></i>
          </div>
          <div className="holder">
            <i class="fas fa-user w"></i>
            <i class="fas fa-search w"></i>
          </div>
        </div>
      </div>
    )
  }
}
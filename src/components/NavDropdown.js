import React from 'react';
import propTypes from 'prop-types';

const NavDropdown = ({title, options}) => {
  return (
    <div className="dropdownholder">
      <h6 className="title" >{title}{""}</h6><span className="arrowdown"></span>
    </div>
  )
}

NavDropdown.defaultProps = {
  title: 'No Title',
  options: []

}

NavDropdown.propTypes = {
  title: propTypes.string.isRequired,
  options: propTypes.array.isRequired
}

export default NavDropdown;
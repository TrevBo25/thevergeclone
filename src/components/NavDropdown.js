import React from 'react';
import propTypes from 'prop-types';

export default class NavDropdown extends React.Component {
  constructor(){
    super()
    this.state = {
      active: false
    }
  }


  render(){
    const {title, options} = this.props
    const ddclass = options.length > 6 ? "dadropdownbig" : (options.length > 4 ? "dadropdownmed" : "dadropdownsm")
    console.log(title, " ", this.state.active)
    return (
      <div className="outtiedrop" onMouseEnter={() => this.setState({active: true})} onMouseLeave={() => this.setState({active: false})}>
        <div className="dropdownholder">
          <h6 className="title" >{title}</h6>{options.length > 0 ? (<span className="arrowdown"></span>) : null}
        </div>
        {options.length > 0 ? (<div className={this.state.active ? "ddholder" : "nono"}>
          <div className={ddclass}>
            {options.map((e, i) => <div className="dditems" key={i}>{e}</div>)}
          </div>
          {options.length > 3 ? (<div className="greybar"></div>) : null}
          {options.length > 3 ? (<div className="all">
            <p className="alltitle">ALL {title}</p>
          </div>) : null}
        </div>) : null}
      </div>
    )
  }
}

NavDropdown.defaultProps = {
  title: 'No Title',
  options: []

}

NavDropdown.propTypes = {
  title: propTypes.string.isRequired,
  options: propTypes.array.isRequired
}
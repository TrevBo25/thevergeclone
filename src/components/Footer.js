import React, {Component} from 'react';
import VLogo from '../assets/whitevergelogo.png';
import VoxLogo from '../assets/voxmedia.png'

const Footer = () => {

  return(
    <div className="bigfoot">
      <div className="left">
        <img src={VLogo} alt="The Verge Logo" className="footerlogo"/>
      </div>
      <div className="middle">
        <div className="middleholder">
          <p className="footerwords">Terms of Use</p><div className="circle"></div><p className="footerwords">Privacy Policy</p><div className="circle"></div><p className="footerwords">Communications Preferences</p>
        </div>
        <div className="middleholder">
          <p className="footerwords">Contact</p><div className="circle"></div><p className="footerwords">Tip Us</p><div className="circle"></div><p className="footerwords">Community Guidelines</p><div className="circle"></div><p className="footerwords">About</p><div className="circle"></div><p className="footerwords">Ethics Statement</p>
        </div>
        <div className="middlebottom">
          <p className="lonelywords">All Systems Operational</p>
          <p className="footerwords">Check out our status page for more details.</p>
        </div>
      </div>
      <div className="right">
        <div className="rightholder">
          <div className="voximage">
            <img src={VoxLogo} alt="The Vox Media Logo" className="rightlogo" />
          </div>
          <div className="voximage"><p className="footerwords">Advertise with us</p></div>
          <div className="voximage"><p className="footerwords">Jobs @ Vox Media</p></div>
          <div className="voximage" className="lonelywordsright">© 2018 <span className="pink">Vox Media</span>, Inc. All Rights</div>
          <div className="voximage" className="lonelywordsright">Reserved</div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
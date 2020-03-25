import React from 'react';
import './header.css';
import Logo from './images/DL Logo.png';

class Header extends React.Component {
    render() {
        return (
            <div>
              <img src={Logo} className="hdr-logo"></img>
            </div>
            
        )
    }
}

export default Header;
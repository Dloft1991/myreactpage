import React from 'react';
import './footer.css';
import Email from './images/email.png';
import GitHub from './images/GitHub.png';
import LinkedIN from './images/LinkedIn.png'

class Footer extends React.Component {
    render() {

        return (
            
            <div className="ftr-main">
                <ul className="Ul-main">
                    <li><a href="https://github.com/Dloft1991" target="_blank"><img src={GitHub} className="ftr-gitHub"></img></a></li>
                    <li><a href="https://www.linkedin.com/in/derek-lofton-27920699/" target="_blank"><img src={LinkedIN} className="ftr-img"></img></a></li>
                    <li><a href="mailto:derek.r.lofton@gmail.com" target="_blank"><img src={Email} className="ftr-img"></img></a></li>
                </ul>
            </div>
        )
    }
}




export default Footer;
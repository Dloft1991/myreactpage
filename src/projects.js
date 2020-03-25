import React from 'react';
import './projects.css';
import FTA from './images/portfolio/fromtheashes.png'
import CGM from './images/portfolio/collector game rick:morty.png';
import RPS from './images/portfolio/RPS new.png';
import CSS from './images/portfolio/funwithcss.png';
import OMDB from './images/portfolio/OMDb api.png';
import Burger from './images/portfolio/daburger.png';

class Projects extends React.Component {
    render() {
        return (
            <div className="pjs-holder">
                <div className="row">
                    <div className="col-sm-4">
                        <a href="http://fromtheashesent.com/" target="_blank"><img className="img-pjs" src={FTA}></img></a>
                    </div>
                    <div className="col-sm-4">
                        <a href="https://dloft1991.github.io/Collection-game/" target="_blank"><img className="img-pjs" src={CGM}></img></a>
                    </div>
                    <div className="col-sm-4">
                        <a href="https://dloft1991.github.io/RPS1.0/" target="_blank"><img className="img-pjs" src={RPS}></img></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <a href="https://dloft1991.github.io/fun-with-CSS/" target="_blank"><img className="img-pjs" src={CSS}></img></a>
                    </div>
                    <div className="col-sm-4">
                        <a href="https://dloft1991.github.io/OMBdAPI/" target="_blank"><img className="img-pjs" src={OMDB}></img></a>
                    </div>
                    <div className="col-sm-4">
                        <a href="https://arcane-stream-10356.herokuapp.com/" target="_blank"><img className="img-pjs" src={Burger}></img></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
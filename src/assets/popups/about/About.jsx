import { browserName, CustomView } from 'react-device-detect';
import { useState } from 'react';
import "./style.css";

const About = () => {


    return (
        <>
        <div className="container">
            <div className="upper">
        <img className='browser-img' src={`./${browserName}.png`} alt="" />
        <h3 className="browser-name">{browserName}</h3>
        </div>
        <div className="content">
            <li><div className="about-title">Chip</div><div className="about-spec">{browserName} Engine</div></li>
            <li><div className="about-title">Memory Used</div><div className="about-spec"></div></li>
            <li><div className="about-title">Startup Disk</div><div className="about-spec">Macintosh HD</div></li>
            <li><div className="about-title">Serial Number</div><div className="about-spec">N/A</div></li>
            <li><div className="about-title">macOS</div><div className="about-spec">Tahoe Beta</div></li>
        </div>
        </div>
        </>
    )
}

export default About;
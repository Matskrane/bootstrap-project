import React from "react";
import { Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';



function WedoYAYthings() {
    return (
        <>
        <div className="showcase">
            <h1>We do YAY things</h1>
            <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci.<br></br>
              Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod,
              pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
        
        
            <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="first" title="First">
                <img src="../images/tab-1.jpg" alt="stuff"></img>
                <div className="flexbox">
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non
                        <br></br> 
                        eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                    </p>
                    <span>SHARE</span>
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </div>
            </Tab>
            <Tab eventKey="profile" title="Second">
                <img src="../images/tab-2.jpg" alt="stuff"></img>
                <div className="flexbox">
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non
                        <br></br> 
                        eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                    </p>
                    <span>SHARE</span>
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </div>
            </Tab>
            <Tab eventKey="contact" title="Third">
                <img src="../images/tab-3.jpg" alt="stuff"></img>
                <div className="flexbox">
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non
                        <br></br> 
                        eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                    </p>
                    <span>SHARE</span>
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </div>
            </Tab>
            </Tabs>
        </div>
        </> 
          
    )
}


export default WedoYAYthings


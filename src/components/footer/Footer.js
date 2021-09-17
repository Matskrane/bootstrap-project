import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVimeoV, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer-background">
        <div className="footer">
            <div className="icons">
            <FontAwesomeIcon icon={faVimeoV}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </div> 
            <div className="container-flex">
                <p>Hello@yay.com</p>
                <p>Copyright 2020</p>
            </div>
        </div>
        </div>
    )
}

export default Footer

import React from 'react'
import './Header.css'

import {Button} from '@material-ui/core'
import LoginMenu from './LoginMenu'

import {Link} from "react-router-dom";


function Header() {
    return (
        <div className="header-container">
            <div id="title"><p>Tutora</p></div>
            <div className="header-button-container">
                <Link to="/">
                <div><Button variant="contained" className="button">Home</Button></div>
                </Link>
                <Link to="/tutors">
                <div><Button variant="contained" className="button">Tutors</Button></div>
                </Link>
                <Link to="/join">
                <div><Button variant="contained" className="button">Become a tutor</Button></div>
                </Link>
                <Link to="/contact">
                <div><Button variant="contained" className="button">Contact</Button></div>
                </Link>
                <LoginMenu></LoginMenu>
            </div>
        </div> 
    )
}

export default Header;

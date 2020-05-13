import React from 'react'
import './Header.css'

import {Button} from '@material-ui/core'
import LoginMenu from './LoginMenu'


function Header() {
    return (
        <div className="header-container">
            <div id="title"><p>Tutora</p></div>
            <div className="header-button-container">
                <div><Button variant="contained" className="button">Home</Button></div>
                <div><Button variant="contained" className="button">Tutors</Button></div>
                <div><Button variant="contained" className="button">Become a tutor</Button></div>
                <div><Button variant="contained" className="button">Contact</Button></div>
                <LoginMenu></LoginMenu>
            </div>
        </div> 
    )
}

export default Header;

import React from 'react'
import './Footer.css'

import {IconButton} from '@material-ui/core'
import {Facebook, GitHub, Telegram, Twitter, YouTube} from '@material-ui/icons'


function Footer() {
    return(
        <div className="footer-container">
            <div className="footer-button-container">                
                <div><IconButton className="icon"><Facebook /></IconButton></div>
                <div><a href="https://github.com/vitaliuchik/tutora"><IconButton className="icon"><GitHub /></IconButton></a></div>
                <div><IconButton className="icon"><Telegram /></IconButton></div>
                <div><IconButton className="icon"><Twitter /></IconButton></div>
                <div><IconButton className="icon"><YouTube /></IconButton></div>
            </div>
            <div className="copyright">
                <p>&copy; 2020 Copyright: Vitalii Papka</p>
            </div>
        </div>
    )
}

export default Footer;
import React from 'react'
import './MainPageContainer.css'
import '../../App.css'
import tutorImg from '../../img/tutor-woman.png'

import {Button} from '@material-ui/core'
import {Link} from "react-router-dom";



function MainPageContainer() {
    return (
        <div className="main-container container">
            <div id="main-text">
                <h1>Need Your Knowledge Boost?</h1>
                <br />
                <p><i>Succeed in any subject,</i></p>
                <p><i>studying with a private tutor on the unique platform of Tutora school</i></p>
                <div id="tutor-button" >
                <Link to="/tutors">
                <div><Button variant="contained" className="button">Tutors</Button></div>
                </Link>
                </div>
            </div>
            <img src={tutorImg} id="tutor"/>
        </div>
    )
}

export default MainPageContainer;
import React from 'react'
import './JoinPageContainer.css'
import '../../App.css'
import teacherImg from '../../img/teacher-desk.png'

import ModalContainer from '../Modal/ModalContainer'

function JoinPageContainer() {
    return (
        <div className="join-container container">
            <div id="join-text">
                <h1>Join the growing community of tutors</h1>
                <p>Access thousands of private tutoring jobs in Maths, English, Science, French, Spanish… anything!</p>
                <p>Whether you are new to tutoring or an established professional tutor, we will help you find new students.</p>
                <div id="join-button" >
                <ModalContainer label="Sign Up" type="signup" button="button"></ModalContainer>
                </div>
            </div>
            <img src={teacherImg} id="teacher"/>
            
            
        </div>
    )
}

export default JoinPageContainer;
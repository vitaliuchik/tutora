import React from 'react'
import './JoinPageContainer.css'
import '../../App.css'

import ModalContainer from '../Modal/ModalContainer'

function JoinPageContainer() {
    return (
        <div className="join-container container">
            <p>Info how to become a tutor</p>
            
            <ModalContainer label="Sign Up" type="signup" button="button"></ModalContainer>
        </div>
    )
}

export default JoinPageContainer;
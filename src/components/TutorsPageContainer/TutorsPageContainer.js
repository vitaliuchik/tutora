import React from 'react'
import './TutorsPageContainer.css'

import TutorCard from '../Card/TutorCard'


function TutorsPageContainer() {
    const tutorsInfo = [
        {
            name: 'Vitalii Papka',
            imageSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            imageDescription: 'tutor face',
            description: 'description'
        },
        {
            name: 'Tutor',
            imageSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            imageDescription: 'tutor face',
            description: 'description'
        }
    ]

    return (
        <div className="tutors-container container">
            {tutorsInfo.map((tutorInfo, key) => 
            (<TutorCard key={key+1} tutorInfo={tutorInfo}></TutorCard>)
            )}           
        </div>
    )
}

export default TutorsPageContainer;
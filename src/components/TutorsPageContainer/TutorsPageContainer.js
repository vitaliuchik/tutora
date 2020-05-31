import React from 'react'

import TutorCard from '../Card/TutorCard'


function TutorsPageContainer() {
    const tutorsInfo = [
        {
            name: 'Vitalii Papka',
            imageSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            imageDescription: 'tutor face',
            city: 'Lviv',
            subject: 'Math',
            price: '150'
        },
        {
            name: 'Andrii Matskiv',
            imageSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            imageDescription: 'tutor face',
            city: 'Kyiv',
            subject: 'English',
            price: '120'
        },
        {
            name: 'Danylo Yariv',
            imageSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            imageDescription: 'tutor face',
            city: 'Kyiv',
            subject: 'Math',
            price: '90'
        },
        {
            name: 'Andrii Nekriv',
            imageSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            imageDescription: 'tutor face',
            city: 'Kharkiv',
            subject: 'Ukrainian',
            price: '80'
        },
        {
            name: 'Denys Lokhiv',
            imageSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            imageDescription: 'tutor face',
            city: 'Lviv',
            subject: 'English',
            price: '160'
        },
        {
            name: 'Diane Petrova',
            imageSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            imageDescription: 'tutor face',
            city: 'Lviv',
            subject: 'Spanish',
            price: '210'
        },
        {
            name: 'Eva Ne',
            imageSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            imageDescription: 'tutor face',
            city: 'Odessa',
            subject: 'Physics',
            price: '200'
        },
        {
            name: 'Anna Pashkova',
            imageSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            imageDescription: 'tutor face',
            city: 'Dnipro',
            subject: 'Ukrainian',
            price: '100'
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
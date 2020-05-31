import React from 'react'
import './TutorCard.css'

import {Button, Card, CardActionArea, CardMedia, CardActions, CardContent} from '@material-ui/core'


function TutorCard(props) {
    return (
        <Card className="card-container" >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.tutorInfo.imageDescription}
                    height="200"
                    image={props.tutorInfo.imageSrc}
                    title={props.tutorInfo.imageDescription}
                >
                </CardMedia>
                <CardContent>
                    <h1 className="tutor-name">{props.tutorInfo.name}</h1>
                    <p className="tutor-description">Subject: {props.tutorInfo.subject}</p>
                    <p className="tutor-description">Location: {props.tutorInfo.city}</p>
                    <p className="price"><b>{props.tutorInfo.price}</b>grn/h</p>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Contact
                </Button>
            </CardActions>
        </Card>
    )
}

export default TutorCard

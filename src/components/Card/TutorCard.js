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
                    <h1 id="tutor-name">{props.tutorInfo.name}</h1>
                    <p id="tutor-description">{props.tutorInfo.description}</p>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    More info
                </Button>
            </CardActions>
        </Card>
    )
}

export default TutorCard

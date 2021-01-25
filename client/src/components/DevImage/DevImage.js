import React from 'react';
import { Container } from 'react-bootstrap';
import "./DevImage.css"


const DevImage = (props) => {
    return (
        <Container>
            <img className={props.className} alt="dev profile image" src={props.source}/>
        </Container>
    )
};


export default DevImage;

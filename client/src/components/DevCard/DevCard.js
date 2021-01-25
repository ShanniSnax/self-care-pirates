import React from 'react';
import Card from 'react-bootstrap/Card';
// import { Container } from 'react-bootstrap';
import "./DevCard.css"

// const styles = {
//     card: {
//       margin: 20,
//       background: "#e8eaf6"
//     },
//     heading: {
//       background: "#3f51b5",
//       minHeight: 50,
//       lineHeight: 3.5,
//       fontSize: "1.2rem",
//       color: "white",
//       padding: "0 20px"
//     },
//     content: {
//       padding: 20
//     }
//   };

// const styles = {
//     image: {
//         width: '243px', 
//         height: '240px', 
//         top: '886px',
//         left: '248px',
//         radius: '256px'
//     }
// };

// const Image = () => {
//     return (
//         <Container>
//         <img style={styles.image} src="https://picsum.photos/200"/>
//         </Container>
//     )
// };

const DevCard = (props) => {
    return (

        <Card>
            {/* <Card.Img style={styles.image} variant="top" src="https://picsum.photos/200" /> */}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <a href={props.github}>
                    <Card.Text>
                        {props.github}
                    </Card.Text>
                </a>
            </Card.Body>
        </Card>
    )
};

export default DevCard;

import React from "react";
import { Card } from "react-bootstrap";
const FacultyCard = (props) => {
    return (
        <Card className={props.className}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text className="card-desc">
                    {props.desc}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FacultyCard;

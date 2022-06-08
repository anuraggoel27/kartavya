import React from "react";
import { Card } from "react-bootstrap";
import "./styles.css"
function AchieverCard(props) {
  return (
    <div className={props.className}>
      <Card>
        <Card.Img variant="top" src={props.img} className="achiever-image"/>
        <Card.Body>
          <Card.Title className="achiever-title">{props.name}</Card.Title>
          <Card.Text className="achiever-text">
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default AchieverCard;

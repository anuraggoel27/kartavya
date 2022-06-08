import React from "react";
import "./styles.css"
const CourseCard = (props) => {
    return (
        <div className={props.className}>
            <h2 className="card-heading course-card1">{props.heading}</h2>
            <h5 className="card-subheading">
                {props.subheading}
            </h5>
            <div className="card-content">
                <div className="card-about">
                <p>{props.about}</p>
                </div>
                <div className="card-image">
                <img src={props.image}></img>
                </div>
                
            </div>
        </div>
    );
};

export default CourseCard;

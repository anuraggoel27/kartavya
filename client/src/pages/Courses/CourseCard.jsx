import React from "react";

const CourseCard = (props) => {
    return (
        <div className={props.className}>
            <h2 className="card-heading course-card1">{props.heading}</h2>
            <h5 className="card-subheading">
                {props.subheading}
            </h5>
            <div className="card-content">
                <p className="card-about">
                   {props.about}
                </p>
                <img src={props.image} className="card-image"></img>
            </div>
        </div>
    );
};

export default CourseCard;

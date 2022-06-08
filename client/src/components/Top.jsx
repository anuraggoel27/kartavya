import React from "react";

const Top = (props) => {
    return (
        <div className="top-body">
            <h1 className="top-heading">{props.heading}</h1>
            <div className="top-content">
                <p className="top-paragraph">{props.paragraph}</p>
                <img
                    className="top-main-image"
                    src={props.image}
                    alt="University"
                ></img>
            </div>
        </div>
    );
};

export default Top;

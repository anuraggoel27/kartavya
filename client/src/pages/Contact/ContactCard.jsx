import React from "react";
import "./styles.css"
const ContactCard = (props) => {
    return (
        <div className={props.className}>
            <h2 className="contact-card-heading course-card1">{props.title}</h2>
            <div className="contact-card-content">
                <div className="contact-card-about">
                {props.details.map((detail,index)=>{
                    return <p key={index}>{detail.name}{(detail.name.length!==0)?":":""}{detail.info}</p>
                })}
                </div>
                <div className="contact-card-image">
                <img src={props.image}></img>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;

import React from "react";
import {ContactDetails} from "./Contactdetails";
import ContactCard from "./ContactCard";

function contactContent() {
  return (
    <div className="contact-body">
      <div className="contact-content">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-paragraph">
          If you have any queries, complaints or suggestions, make sure to
          contact us.
        </p>
        <img className="contact-main-image" src="/images/contact.png"></img>
      </div>
      <div className="contact-cards">
       {ContactDetails.map((contact,index)=>{
        return <ContactCard key={index} title={contact.title} className="contact-card" details={contact.details} image={contact.image}/>
       })}
      </div>
    </div>
  );
}
export default contactContent;

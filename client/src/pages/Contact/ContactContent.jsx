import React from "react";
import { ContactDetails } from "./Contactdetails";
import ContactCard from "./ContactCard";
import Top from "../../components/Top";
import { TopData } from "../../components/Topdata";

function contactContent() {
    return (
        <div className="contact-container">
            <Top
                heading={TopData[2].heading}
                paragraph={TopData[2].paragraph}
                image={TopData[2].image}
            />
            <div className="contact-cards">
                {ContactDetails.map((contact, index) => {
                    return (
                        <ContactCard
                            key={index}
                            title={contact.title}
                            className="contact-card"
                            details={contact.details}
                            image={contact.image}
                        />
                    );
                })}
            </div>
        </div>
    );
}
export default contactContent;

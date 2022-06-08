import React from "react";
import { Card, Form, Col } from "react-bootstrap";
import "../styles.css";
import FacultyCard from "./FacultyCard";
import {FacultyData} from "./FacultyData";

function Faculty() {
    return (
        <div className="Faculty">
            <h1 className="faculty-heading">Faculty</h1>
            <div className="faculty-cards">
                {FacultyData.map((data,index)=>{
                    return <FacultyCard className="faculty-card" key={index} image={data.image} name={data.name} desc={data.description} />
                })}
            </div>
        </div>
    );
}
export default Faculty;

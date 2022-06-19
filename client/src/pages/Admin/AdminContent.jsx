import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import StudyForm from "./StudyForm";
import CreateNoticeContent from "../Notice Board/CreatePost/CreateNoticeContent";
import Registration from "../Auth/Registration";
import "./styles.css";


export const AdminContext=React.createContext;

const AdminContent = ({ allowed }) => {
    const handleClick = () => {
        window.location = "http://localhost:3000/CreateNotice";
    };
    const registerUser = () => {
        window.location = "http://localhost:3000/auth/register";
    };
    return (
        <div className="admin-content">
        <div className="admin-form-group">
            <div className="admin-post-create-button">
                {/* <h1 className="admin-category-header">Create Notice</h1> */}
                <CreateNoticeContent/>
            </div>
            <div className="admin-study-material">
                <h1 className="admin-category-header">Study Material</h1>
                <StudyForm/>
            </div>
        </div>
            <div className="admin-register">
                <Registration/>
            </div>
        </div>
    );
};

export default AdminContent;

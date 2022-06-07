import React from "react";
import { Button } from "react-bootstrap";
import CustomTable from "./Notice Board/Tables";
const NoticeBoardContent = () => {
    return (
        <div className="noticeboard-content">
            <div className="notice-header">
                <h1>Notice Board</h1>
                <Button onClick={()=>window.location="http://localhost:3000/createnotice"} className="notice-content-button">Create new</Button>
            </div>
            <div className="notice-board">
                <CustomTable />
            </div>
        </div>
    );
};

export default NoticeBoardContent;

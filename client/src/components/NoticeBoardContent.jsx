import React from "react";
import CustomTable from "../components/Tables";
const NoticeBoardContent = () => {
    return (
        <div className="notice-content">
            <div className="notice-header">
                <h1>Notice Board</h1>
            </div>
            <div className="notice-board">
                <CustomTable />
            </div>
        </div>
    );
};

export default NoticeBoardContent;

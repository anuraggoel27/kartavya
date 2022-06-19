import React, { useEffect, useState,useContext } from "react";
import { Navigate } from "react-router-dom";
import AdminContent from "./AdminContent";
import { CircularProgress } from "@material-ui/core";
// import Login from "../../components/Login"
import axios from "axios";
import { UserContext } from "../../App";
function Admin() {
    const {isAdmin,user}=useContext(UserContext);
    console.log(isAdmin,user);
    return (
        <div>
            {isAdmin ? (
                <AdminContent />
            ) : (
                <div style={{ marginTop: "10rem" }}>
                    <div className="">
                        <h1>You need to be an admin to access this page</h1>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Admin;

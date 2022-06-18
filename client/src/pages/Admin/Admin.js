import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AdminContent from "./AdminContent";
import { CircularProgress } from "@material-ui/core";
// import Login from "../../components/Login"
import axios from "axios";
function Admin() {
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        const allow = async () => {
            const token = localStorage.getItem("token");
            await axios
                .get("http://localhost:5000/admin", {
                    headers: {
                        "Authorization": token
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        setAllowed(true);
                    }
                })
                .catch((error) => {
                    // window.alert("You need to login with an admin account to access the page");
                    // window.location = "http://localhost:3000";
                });
        };
        allow();
    }, []);

    return (
        <div>
            {allowed ? <AdminContent /> : <div style={{marginTop:"10rem"}}>
                <div className="">
                    <h1>You need to be an admin to access this page</h1>
                    
                </div>
            </div>}
        </div>
    );
}

export default Admin;

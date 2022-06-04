import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdminContent from "../components/AdminContent";
import axios from "axios";
function Admin() {
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        const allow = async () => {
            await axios
                .get("http://localhost:5000/admin", {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": true,
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        setAllowed(true);
                    }
                })
                .catch((error) => {
                    window.alert("You need to login to access the page");
                    window.location = "http://localhost:3000";
                });
        };
        allow();
    }, []);

    return (
        <div>
            <Header />
            {allowed ? <AdminContent /> : <div style={{marginTop:"10rem"}}>"loading..."</div>}
            <Footer />
        </div>
    );
}

export default Admin;

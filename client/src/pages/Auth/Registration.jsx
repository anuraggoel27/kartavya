import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import EditProfileForm from "./EditProfileForm";
import RegistrationForm from "./RegistrationForm";


const Registration = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const pathname = window.location.pathname;
        const token = localStorage.getItem("token");
        if (pathname.split("/")[1] === "editStudent") {
            const id = pathname.split("/")[2];
            const response = async () => {
                await axios
                    .get(`http://localhost:5000/users/getStudent/${id}`, {
                        headers: {
                            Authorization: token,
                        },
                    })
                    .then((res) => {
                        console.log(res.data);
                        setData(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            };
            response();
        }
    }, []);
    return (
        data?<EditProfileForm formdata={data}/>:<RegistrationForm/>
    );
};

export default Registration;

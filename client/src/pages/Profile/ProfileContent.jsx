import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Paper } from "@material-ui/core";
import "./styles.css";
import { Button } from "react-bootstrap";
import Attendance from "./Attendance";
import OutstandingFee from "./OutstandingFee";
import PersonalInfo from "./PersonalInfo";
import ProfileHeader from "./ProfileHeader";
export const DataContext = React.createContext();

const ProfileContent = () => {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        console.log("Use effect called");
        const token = localStorage.getItem("token");

        const getProfile = async () => {
            try {
                const info = await axios.get(
                    "http://localhost:5000/users/profile",
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                console.log(info.data.user);
                setProfile(info.data.user);
                console.log(profile);
            } catch (error) {
                console.log("error");
                window.alert("You need to login");
                window.location = "http://localhost:3000";
            }
        };
        getProfile();

        
    }, []);
    return (
        <div className="profile-content" style={{ marginTop: "10.5rem" }}>
            <ProfileHeader data={profile}/>
            <div className="profile-flex">
                <PersonalInfo data={profile}/>
                <div className="profile-flex-subgroup">
                    <OutstandingFee data={profile}/>
                    <Attendance data={profile}/>
                </div>
            </div>
        </div>
    );
};

export default ProfileContent;

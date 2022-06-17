import { Paper } from "@material-ui/core";
import React,{useEffect, useState} from "react";

const ProfileHeader = (props) => {
    const [profile,setProfile]=useState({});
    useEffect(()=>{
        setProfile(props.data);
    },[props])
    return (
        <div className="profile-header">
            <Paper elevation={6} className="profile-header-paper">
                <div className="profile-picture">
                    <img></img>
                </div>
                <div className="profile-header-name">
                    <h3>
                        {profile?.firstName} {profile?.lastName}
                    </h3>
                </div>
            </Paper>
        </div>
    );
};

export default ProfileHeader;

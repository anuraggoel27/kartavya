import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";

const PersonalInfo = (props) => {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        setProfile(props.data);
    }, [props]);
    return (
        <div className="profile-information">
            <Paper elevation={6} className="profile-information-paper">
                <h3 className="profile-information-header">Profile</h3>
                <div className="profile-personal">
                    <h4 className="profile-personal-header">
                        Personal Information
                    </h4>
                    <div className="personal-info">
                        <h6 className="personal-info-category">Name</h6>
                        <h6 className="personal-info-data">
                            {profile?.firstName} {profile?.lastName}
                        </h6>
                    </div>
                    <div className="personal-info">
                        <h6 className="personal-info-category">Class</h6>
                        <h6 className="personal-info-data">
                            {profile?.standard}
                        </h6>
                    </div>
                    <div className="personal-info">
                        <h6 className="personal-info-category">Mobile</h6>
                        <h6 className="personal-info-data">
                            {profile?.mobileNumber}
                        </h6>
                    </div>
                    <div className="personal-info">
                        <h6 className="personal-info-category">Roll No.</h6>
                        <h6 className="personal-info-data">{profile?.roll}</h6>
                    </div>
                    <div className="personal-info">
                        <h6 className="personal-info-category">City</h6>
                        <h6 className="personal-info-data">
                            {profile?.address?.city}
                        </h6>
                    </div>
                    <div className="personal-info">
                        <h6 className="personal-info-category">Location</h6>
                        <h6 className="personal-info-data">
                            {profile?.address?.locality}
                        </h6>
                    </div>
                    <div className="personal-info">
                        <h6 className="personal-info-category">Pincode</h6>
                        <h6 className="personal-info-data">
                            {profile?.address?.pincode}
                        </h6>
                    </div>
                </div>
                <div className="profile-parents">
                    <h4 className="profile-parents-header">
                        Parent's Information
                    </h4>
                    <div className="profile-parent">
                        <h5 className="profile-parents-header">Father</h5>
                        <div className="personal-info">
                            <h6 className="personal-info-category">Name</h6>
                            <h6 className="personal-info-data">
                                {profile?.parentDetails?.father.name}
                            </h6>
                        </div>
                        <div className="personal-info">
                            <h6 className="personal-info-category">
                                Occupation
                            </h6>
                            <h6 className="personal-info-data">
                                {profile?.parentDetails?.father?.occupation}
                            </h6>
                        </div>
                        <div className="personal-info">
                            <h6 className="personal-info-category">
                                Mobile Number
                            </h6>
                            <h6 className="personal-info-data">
                                {profile?.parentDetails?.father?.mobileNumber}
                            </h6>
                        </div>
                    </div>
                    <div className="profile-parent">
                        <h5 className="profile-parent-header">Mother</h5>
                        <div className="personal-info">
                            <h6 className="personal-info-category">Name</h6>
                            <h6 className="personal-info-data">
                                {profile?.parentDetails?.mother?.name}
                            </h6>
                        </div>
                        <div className="personal-info">
                            <h6 className="personal-info-category">
                                Occupation
                            </h6>
                            <h6 className="personal-info-data">
                                {profile?.parentDetails?.mother?.occupation}
                            </h6>
                        </div>
                        <div className="personal-info">
                            <h6 className="personal-info-category">
                                Mobile Number
                            </h6>
                            <h6 className="personal-info-data">
                                {profile?.parentDetails?.mother?.mobileNumber}
                            </h6>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default PersonalInfo;

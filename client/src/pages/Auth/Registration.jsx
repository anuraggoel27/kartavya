import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./styles.css";
import { Paper } from "@material-ui/core";
const Registration = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        isAdmin: false,
        standard: "",
        roll: "",
        subjects: [""],
        mobileNumber: "",
        fatherName: "",
        fatherOccupation: "",
        fatherMobileNumber: "",
        motherName: "",
        motherOccupation: "",
        motherMobileNumber: "",
        locality: "",
        city: "",
        pincode: "",
    });
    const handleSubmit = async () => {
        const token = localStorage.getItem("token");
        
        await axios
            .post("http://localhost:5000/users/register",data,
                {
                    headers:{
                        "Authorization":token
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="registration-form">
            <h1>Registration Form</h1>
            <Paper elevation={6} className="form-paper">
                <form>
                    <div>
                        <label className="checkbox-label">Admin</label>
                        <input
                            type="checkbox"
                            name="admin"
                            onChange={(e) =>
                                setData({ ...data, isAdmin: e.target.checked })
                            }
                        />
                    </div>
                    <div className="form-category">
                        <h2 className="form-category-header">
                            Personal Details
                        </h2>
                        <div className="form-group">
                            <div className="form-input">
                                <label className="form-label">First Name</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            firstName: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input">
                                <label className="form-label">Last Name</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            lastName: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-input">
                                <label className="form-label">User Name</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            username: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-input">
                                <label className="form-label">Class</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            standard: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input">
                                <label className="form-label">
                                    Roll Number
                                </label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            roll: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-input">
                                <label>Phone Number</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            mobileNumber: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input">
                                <label>Pincode</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            pincode: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-input">
                                <label>Locality</label>
                                <textarea
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            locality: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input">
                                <label>City</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            city: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <h2 className="form-category-header">Parent Details</h2>
                        <h3 className="form-subcategory-header">Father</h3>
                        <div className="form-group">
                            <div className="form-input">
                                <label>Name</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            fatherName: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="form-input">
                                <label>Occupation</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            fatherOccupation: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input">
                                <label>Phone Number</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            fatherMobileNumber: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <h3 className="form-subcategory-header">Mother</h3>
                        <div className="form-group">
                            <div className="form-input">
                                <label>Name</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            motherName: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input">
                                <label>Occupation</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            motherOccupation: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input">
                                <label>Phone Number</label>
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            motherMobileNumber: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <Button onClick={handleSubmit}><h3>Register</h3></Button>
                </form>
            </Paper>
        </div>
    );
};

export default Registration;

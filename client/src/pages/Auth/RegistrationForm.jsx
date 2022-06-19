import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./styles.css";
import { Paper } from "@material-ui/core";
import CustomModal from "../../components/Modal";

const RegistrationForm = (props) => {
    const [data, setData] = useState(props.formdata[0]);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFailure, setOpenFailure] = useState(false);
    // const [editForm] =useForm({

    // })
    console.log(data);
    const handleCloseSuccess = () => {
        setOpenSuccess(false);
    };
    const handleCloseFailure = () => {
        setOpenFailure(false);
    };
    const handleSubmit = async () => {
        const token = localStorage.getItem("token");

        await axios
            .put(`http://localhost:5000/users/editUser/${data._id}`, data, {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                setOpenSuccess(true);
                document.querySelector("form").reset();
            })
            .catch((err) => {
                setOpenFailure(true);
            });
    };
    return (
        <div className="registration-content">
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
                                    setData({
                                        ...data,
                                        isAdmin: e.target.checked,
                                    })
                                }
                            />
                        </div>
                        <div className="form-category">
                            <h2 className="form-category-header">
                                Personal Details
                            </h2>
                            <div className="form-group">
                                <div className="form-input">
                                    <label className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        value={data.firstName}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                firstName: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-input">
                                    <label className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                    value={data.lastName}
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
                                    <label className="form-label">
                                        User Name
                                    </label>
                                    <input
                                    value={data.username}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                username: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                {/* <div className="form-input">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <input
                                    value={data.password}
                                        type="password"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </div> */}
                            </div>
                            <div className="form-group">
                                <div className="form-input">
                                    <label className="form-label">Class</label>
                                    <input
                                    value={data.standard}
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
                                    value={data.roll}
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
                                    value={data.mobileNumber}
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
                                    value={data.address.pincode}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                address:{
                                                    ...data.address,
                                                    pincode:e.target.value
                                                }
                                            })
                                        }
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-input">
                                    <label>Locality</label>
                                    <textarea
                                    value={data.address.locality}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                address:{
                                                    ...data.address,
                                                    locality:e.target.value
                                                }
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-input">
                                    <label>City</label>
                                    <input
                                    value={data.address.city}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                address:{
                                                    ...data.address,
                                                    city:e.target.value
                                                }
                                            })
                                        }
                                    />
                                </div>
                            </div>

                            <h2 className="form-category-header">
                                Parent Details
                            </h2>
                            <h3 className="form-subcategory-header">Father</h3>
                            <div className="form-group">
                                <div className="form-input">
                                    <label>Name</label>
                                    <input
                                    value={data.parentDetails.father.name}
                                        onChange={(e) =>
                                            setData({
                                                ...data,parentDetails:{
                                                    ...data.parentDetails,father:{
                                                        ...data.father,name:e.target.value
                                                    }
                                                }
                                                
                                            })
                                        }
                                    />
                                </div>

                                <div className="form-input">
                                    <label>Occupation</label>
                                    <input
                                    value={data.parentDetails.father.occupation}
                                        onChange={(e) =>
                                            setData({
                                                ...data,parentDetails:{
                                                    ...data.parentDetails,father:{
                                                        ...data.father,occupation:e.target.value
                                                    }
                                                }
                                                
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-input">
                                    <label>Phone Number</label>
                                    <input
                                    value={data.parentDetails.father.mobileNumber}
                                        onChange={(e) =>
                                            setData({
                                                ...data,parentDetails:{
                                                    ...data.parentDetails,father:{
                                                        ...data.father,mobileNumber:e.target.value
                                                    }
                                                }
                                                
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
                                    value={data.parentDetails.mother.name}
                                        onChange={(e) =>
                                            setData({
                                                ...data,parentDetails:{
                                                    ...data.parentDetails,mother:{
                                                        ...data.mother,name:e.target.value
                                                    }
                                                }
                                                
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-input">
                                    <label>Occupation</label>
                                    <input
                                    value={data.parentDetails.mother.occupation}
                                        onChange={(e) =>
                                            setData({
                                                ...data,parentDetails:{
                                                    ...data.parentDetails,mother:{
                                                        ...data.mother,occupation:e.target.value
                                                    }
                                                }
                                                
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-input">
                                    <label>Phone Number</label>
                                    <input
                                    value={data.parentDetails.mother.mobileNumber}
                                        onChange={(e) =>
                                            setData({
                                                ...data,parentDetails:{
                                                    ...data.parentDetails,mother:{
                                                        ...data.mother,mobileNumber:e.target.value
                                                    }
                                                }
                                                
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <Button onClick={handleSubmit}>
                            <h3>Register</h3>
                        </Button>
                    </form>
                </Paper>
            </div>
            <CustomModal
                title="Success"
                message={
                    data.isAdmin
                        ? "Admin has been added successfully!"
                        : "Student has been added successfully!"
                }
                open={openSuccess}
                handleClose={handleCloseSuccess}
            />
            <CustomModal
                title="Failure"
                message="There was some error! Please try again!"
                open={openFailure}
                handleClose={handleCloseFailure}
            />
        </div>
    );
};

export default RegistrationForm;

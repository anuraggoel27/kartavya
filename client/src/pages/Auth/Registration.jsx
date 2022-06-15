import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const Registration = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        isAdmin:false,
        standard: "",
        roll:"",
        subjects:[""],
        mobileNumber:"",
        fatherName:"",
        fatherOccupation:"",
        fatherMobileNumber:"",
        motherName:"",
        motherOccupation:"",
        motherMobileNumber:"",
        location:"",
        city:"",
        pincode:""

    });
    const handleSubmit = async () => {
        console.log(data);
        await axios
            .post("http://localhost:5000/users/register", {
                data:data,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="registration-form" style={{ marginTop: "10.5rem" }}>
            <form>
                <div className="form-category">
                    <h2 className="form-category-header">Personal Details</h2>
                    <input
                        placeholder="User Name"
                        onChange={(e) =>
                            setData({ ...data, username: e.target.value })
                        }
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                        }
                    />
                    <input placeholder="First Name"
                        onChange={(e)=>
                        setData({...data, firstName:e.target.value})
                        }
                    />
                    <input placeholder="Last Name"
                        onChange={(e)=>
                        setData({...data, lastName:e.target.value})
                        }
                    />
                    <input placeholder="Class"
                        onChange={(e)=>
                        setData({...data, standard:e.target.value})
                        }
                    />
                    <input placeholder="Roll Number"
                        onChange={(e)=>
                        setData({...data, roll:e.target.value})
                        }
                    />
                    <input placeholder="Admin"
                    type="checkbox"
                    name="admin"
                        onChange={(e)=>
                        setData({...data, isAdmin:e.target.checked})
                        }
                    />
                    <label htmlFor="admin">Admin</label>
                    <input placeholder="Phone Number"
                        onChange={(e)=>
                        setData({...data, mobileNumber:e.target.value})
                        }
                    />
                    <input placeholder="Locality" onChange={(e)=>setData({...data,locality:e.target.value})}/>
                    <input placeholder="City" onChange={(e)=>setData({...data,city:e.target.value})}/>
                    <input placeholder="Pincode" onChange={(e)=>setData({...data,pincode:e.target.value})}/>
                    <h2 className="form-category-header">Parent Details</h2>
                    <h3 className="form-subcategory-header">Father</h3>
                    <input placeholder="Name" 
                        onChange={(e)=>setData({...data,fatherName:e.target.value
                        })}
                    />
                    <input placeholder="Occupation" 
                        onChange={(e)=>setData({...data,fatherOccupation:e.target.value
                        })}
                    />
                    <input placeholder="Mobile Number" 
                        onChange={(e)=>setData({...data,fatherName:e.target.value
                        })}
                    />
                    <h3 className="form-subcategory-header">Mother</h3>
                    <input placeholder="Name" 
                        onChange={(e)=>setData({...data,motherName:e.target.value
                        })}
                    />
                    <input placeholder="Occupation" 
                        onChange={(e)=>setData({...data,motherOccupation:e.target.value
                        })}
                    />
                    <input placeholder="Mobile Number" 
                        onChange={(e)=>setData({...data,motherMobileNumber:e.target.value
                        })}
                    />
                    
                </div>

                <Button onClick={handleSubmit}>Register</Button>
            </form>
        </div>
    );
};

export default Registration;

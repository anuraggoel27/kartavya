import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Paper,Button } from "@material-ui/core";
import axios from "axios";
import "./styles.css";

const Notice = () => {
    const params = useParams();
    const id = params.id;
    const [data, setData] = useState({});

    const handleEdit=(e)=>{
        window.location=`http://localhost:3000/editpost/${id}`
    }

    useEffect(() => {
        const response = async () => {
            const token = localStorage.getItem("token");
            const x = await axios
                .get(`http://localhost:5000/notices/${id}`, {
                    headers: {
                        "Authorization":token
                    },
                })
                .then((res) => {
                    setData(res.data);
                    console.log(res.data);
                })
                .catch((err) => console.log(err));
        };
        response();
    }, []);
    return (
        <div>
            <div className="notice-body">
                <div className="notice-heading">
                    <h1>Notice</h1>
                </div>
                {Object.keys(data).length!==0 && 
                <div className="notice-content" style={{textAlign:"left"}}>
                    <Paper className="notice-paper" elevation={3}>
                        <div className="notice-header">
                            <h3 className="notice-title">{data.title}</h3>
                            <h6 className="notice-date">Posted On: {data.updatedAt.split('T')[0]}</h6>
                        </div>
                        <div className="notice-desc">{data.description}</div>
                        <Button onClick={handleEdit} className="notice-edit">Edit</Button>
                    </Paper>
                </div>
                }
            </div>
        </div>
    );
};

export default Notice;

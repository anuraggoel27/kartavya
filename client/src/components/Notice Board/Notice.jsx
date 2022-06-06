import React, { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
import {Paper} from "@material-ui/core"
import axios from "axios";

const Notice = () => {
  const params=useParams();
  const id=params.id;
    const [data,setData] =useState({})
    useEffect(() => {
        const response = async () => {
            const x = await axios
                .get(`http://localhost:5000/admin/notice/${id}`, {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": true,
                    },
                })
                .then((res) => setData(res.data))
                .catch((err) => console.log(err));
        };
        response();
    }, []);
    return (
        <div>
            <div className="notice-body">
              <div className="notice-heading"><h1>Notice</h1></div>
                <div className="notice-content">
                <Paper className="notice-paper" elevation={3}>
                    {/* {!data && <h3>Invalid Notice Id</h3>} */}
                    <div> 
                        <h3 className="notice-title">{data.title}</h3>
                    </div>
                    <div className="notice-desc">{data.description}</div>
                    </Paper>
                </div>
            </div>
        </div>
    );
};

export default Notice;

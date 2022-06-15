import React,{useEffect,useState} from "react";
import { Button } from "react-bootstrap";
import CustomTable from "./Tables";
import axios from "axios";
const NoticeBoardContent = () => {
    
    useEffect( ()=>{
        const token = localStorage.getItem("token");
        axios.get('http://localhost:5000/users/isLogged',{
            headers:{
                "Authorization": token
            }
        })
        .then((res)=> console.log(res.data))
        .catch(err=>{
            window.alert('You need to login')
            window.location = "http://localhost:3000"
        })
    },[])
    return (
        <div className="noticeboard-content">
            <div className="notice-header">
                <h1>Notice Board</h1>
            </div>
            <div className="notice-board">
                <CustomTable 
                    titleRow={["S. No.","Date","Title","Delete"]}
                />
            </div>
        </div>
    );
};

export default NoticeBoardContent;

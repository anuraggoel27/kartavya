import React, { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdminContent from "../components/AdminContent";
import axios from "axios";
function Admin(){
    const [allowed,setAllowed] = useState(false);

    useEffect(()=>{
        const allow =async()=>{
            const response= await axios.get('http://localhost:5000/admin',{
                withCredentials:true,
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials":true,
                }
            })
            if(response.status===200){
                console.log("Yaay!")
                setAllowed(true);
            }
        }
        allow();
    },[]);
    
    return (
        <div>
        <Header/>
        <AdminContent/>
        {
            allowed ? <div className="">hello</div>: console.log("not allowed")
        }
        <Footer/>
        </div>
    )
}

export default Admin;
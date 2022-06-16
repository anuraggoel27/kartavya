import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';

const ProfileContent = () => {
  const [profile,setProfile] = useState({});
  useEffect(()=>{
    console.log('Use effect called');
    const token = localStorage.getItem("token");

    const getProfile = async() =>{
      try {
        const info = await axios.get('http://localhost:5000/users/profile',{
        headers:{
          "Authorization":token
        }
        })
        console.log(info.data.user);
        // setProfile(info.data.user) but dhyaan dena chacha setState is asynchronous
        console.log(profile);

      } catch (error) {
        console.log('error');
        window.alert('You need to login');
        window.location="Http://localhost:3000"
      }
    }
    getProfile();
  },[])
  return (
    <div style={{marginTop:"10rem"}}>ProfileContent</div>
  )
}

export default ProfileContent
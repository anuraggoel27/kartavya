import axios from "axios";
import React,{useState,useEffect} from "react";
import { Navbar, Nav, NavDropdown,Button } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import Login from "./Login";
import Logout from "./Logout";
function Header(){
  
  const [user,setUser] = useState(null);
  useEffect(()=>{
    const getUser = () =>{
      axios.get('http://localhost:5000/auth/google/login/success',{
        withCredentials:true,
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials":true,
        }
      })
      .then((response)=>{
        if(response.status===200) return response.data;
        throw new Error('authentication has been failed');
      })
      .then((resObject)=>{
        console.log(resObject.user);
        setUser(resObject.user);
      })
      .catch((error)=> console.log(error))

    }
    getUser();
  },[])
  return (
    <div className="header">
    <CustomNavbar/>
      <a  href="/"><h1 className="brandName">Kartavya Academy</h1></a>
      <div className="navbar-profile">
            {!user && 
              <Login/>
            }
            {user && 
              <Logout/>
           }
          </div>
    </div>
  );
}
export default Header;

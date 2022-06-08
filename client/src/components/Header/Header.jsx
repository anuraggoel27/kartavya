import axios from "axios";
import React,{useState,useEffect,useContext} from "react";
import { UserContext } from "../../App";
import CustomNavbar from "../Navbar/CustomNavbar";
import Login from "../Login";
import Logout from "../Logout";
import "./styles.css";

const Header=()=>{
  console.log('header called..')
  const user=useContext(UserContext);
  console.log(user);
  return (
    <div className="header">
    <CustomNavbar/>
      <a  href="/"><h1 className="brandName">Kartavya Academy</h1></a>
      <div className="navbar-profile">
            {!user && 
              <Login/>
            }
            {user &&
              <div>
                <h4>{user.username}</h4>
                <Logout/>
              </div>
              
            }
          </div>
    </div>
  );
}
export default Header;

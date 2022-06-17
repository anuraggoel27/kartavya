import React,{useEffect,useState} from "react";
import { Paper } from "@material-ui/core";
import "./styles.css";

const Attendance = (props) => {
    const [profile,setProfile]=useState({});
    useEffect(()=>{
        setProfile(props.data);
    },[props]);
    return (
        <div className="profile-attendance">
            <Paper className="profile-attendance-paper" elevation={6}>
                <h4>Attendance</h4>
                <div className="profile-attendance-content">
                    <div className="profile-attendance-main-category">
                        <div className="profile-attendance-type">Total</div>
                        <div className="profile-attendance-number">43/51</div>
                    </div>

                    <div className="profile-attendance-category">
                        <div className="profile-attendance-type">Maths</div>
                        <div className="profile-attendance-number">15/17</div>
                    </div>
                    <div className="profile-attendance-category">
                        <div className="profile-attendance-type">Chemistry</div>
                        <div className="profile-attendance-number">12/17</div>
                    </div>
                    <div className="profile-attendance-category">
                        <div className="profile-attendance-type">Physics</div>
                        <div className="profile-attendance-number">16/17</div>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default Attendance;

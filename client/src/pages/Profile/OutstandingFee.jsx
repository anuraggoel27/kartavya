import React, { useEffect,useState } from "react";
import { Paper } from "@material-ui/core";
import "./styles.css";
import { Button } from "react-bootstrap";
const OutstandingFee = (props) => {
    const [profile,setProfile]=useState({});
    useEffect(()=>{
        setProfile(props.data);
    },[props]);
    return (
        <div className="profile-outstanding-fee">
            <Paper className="profile-outstanding-fee-paper" elevation={6}>
                <h4>Outstanding Fee</h4>
                <div className="profile-outstanding-fee-content">
                    <div className="profile-outstanding-fee-amount">
                        ₹8270203
                    </div>
                    <Button>Pay Now</Button>
                </div>
            </Paper>
        </div>
    );
};

export default OutstandingFee;

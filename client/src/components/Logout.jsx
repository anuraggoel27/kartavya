import React from "react";
import {Button} from "react-bootstrap";
const Logout = () => {
    const onLogout = () => {
        window.open("http://localhost:5000/auth/google/logout", "_self");
    };
    return (
        <div className="navbar-loggedout">
            <Button className="login-button" onClick={onLogout}>
                Logout
            </Button>
        </div>
    );
};

export default Logout;

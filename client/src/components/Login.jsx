import React from "react";
import {Button} from "react-bootstrap";
const Login = () => {
    const onLogin = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };
    return (
        <div className="navbar-loggedin">
            <Button className="login-button" onClick={onLogin}>
                Login
            </Button>
        </div>
    );
};

export default Login;

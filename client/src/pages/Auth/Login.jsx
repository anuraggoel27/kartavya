import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import "./styles.css";
const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    useEffect(() => {
        const getUser = async () => {
            const token = localStorage.getItem("token");
            await axios
                .get("http://localhost:5000/users/isLogged", {
                    headers: {
                        Authorization: token,
                    },
                })
                .then((res) => {
                    window.location = "http://localhost:3000";
                })
                .catch((err) => {
                    localStorage.clear();
                    console.log(err);
                });
        };
        getUser();
    }, []);

    const handleSubmit = async () => {
        await axios
            .post("http://localhost:5000/users/login", {
                username: data.username,
                password: data.password,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                const token = res.data.token;
                localStorage.setItem("token", token);
                window.location = "http://localhost:3000";
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="login-content">
            <div className="registration-form">
                <h1>Login</h1>
                <Paper elevation={6} className="form-paper">
                    <form>
                        <div className="form-input">
                            <label htmlFor="usename">Username</label>
                            <input
                                name="username"
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        username: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <Button onClick={handleSubmit}>Login</Button>
                    </form>
                </Paper>
            </div>
        </div>
    );
};

export default Login;

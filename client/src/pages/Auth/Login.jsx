import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
    });
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
                console.log(token);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="login-form" style={{ marginTop: "10rem" }}>
            <form>
                <label htmlFor="usename">Username</label>
                <input
                    name="username"
                    onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                    }
                />
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />
                <Button onClick={handleSubmit}>Login</Button>
            </form>
        </div>
    );
};

export default Login;

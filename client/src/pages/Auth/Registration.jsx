import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const Registration = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const handleSubmit = async () => {
        await axios
            .post("http://localhost:5000/users/register", {
                username: data.username,
                password: data.password,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="registrstion-form" style={{ marginTop: "10.5rem" }}>
            <form>
                <input
                    placeholder="username"
                    onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                    }
                />
                <input
                    placeholder="password"
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />
                <Button onClick={handleSubmit}>Register</Button>
            </form>
        </div>
    );
};

export default Registration;

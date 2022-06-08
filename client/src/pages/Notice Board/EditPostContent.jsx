import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Paper } from "@material-ui/core";
import { Button } from "react-bootstrap";
import "./styles.css";

const EditPostContent = () => {
    const params = useParams();
    const id = params.id;
    const [notice, setNotice] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        const response = async () => {
            const x = await axios
                .get(`http://localhost:5000/admin/notice/${id}`, {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": true,
                    },
                })
                .then((res) => {
                    setNotice(res.data);
                    console.log(res.data);
                })
                .catch((err) => console.log(err));
        };
        response();
    }, []);

    const handleSubmit = async (e) => {
        const res = await axios({
            method: "put",
            url: `http://localhost:5000/admin/editpost/${id}`,
            data: {
                title: notice.title,
                description: notice.description,
            },
            withCredentials: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
        })
            .then((res) => {
                console.log(res);
                if (!alert("Successfully Updated!"))
                    window.location = `http://localhost:3000/Notice/${id}`;
            })
            .catch((err) => {
                window.alert("Please try again!");
                console.log(err);
            });
    };
    return (
        <div className="create-notice-content">
            <div className="create-notice-header">
                <h1>Edit Notice</h1>
            </div>
            <Paper className="create-notice-paper" elevation={5}>
                <div className="create-notice-form">
                    <form onSubmit={handleSubmit}>
                        <div className="create-notice-input-title">
                            {/* <label for="title">Title</label> */}
                            <div className="create-notice-label-title">
                                <h6>Title</h6>
                            </div>
                            <input
                                placeholder="Title"
                                id="title"
                                name="title"
                                onChange={(e) =>
                                    setNotice({
                                        ...notice,
                                        title: e.target.value,
                                    })
                                }
                                value={notice.title}
                            />
                        </div>
                        <div className="create-notice-input-desc">
                            {/* <label for="content">Description</label> */}
                            <div className="create-notice-label-title">
                                <h6>Description</h6>
                            </div>
                            <textarea
                                placeholder="Content"
                                id="content"
                                name="content"
                                type="textarea"
                                rows={10}
                                onChange={(e) =>
                                    setNotice({
                                        ...notice,
                                        description: e.target.value,
                                    })
                                }
                                value={notice.description}
                            />
                        </div>

                        <div>
                            <Button type="submit"> Submit</Button>
                        </div>
                    </form>
                </div>
            </Paper>
        </div>
    );
};

export default EditPostContent;

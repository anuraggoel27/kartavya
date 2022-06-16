import React, { useState } from "react";
import axios from "axios";
import { Paper} from "@material-ui/core";
import { Button} from "react-bootstrap";
import "../styles.css";
import { AiTwotoneFileUnknown } from "react-icons/ai";

const CreateNoticeContent = () => {
    const [notice, setNotice] = useState({
        title: "",
        content: "",
    });

    const handleSubmit = async (event) => {
        const token = localStorage.getItem("token");
        event.preventDefault();
        axios
            .post(
                "http://localhost:5000/notices/newNotice",
                {
                    title: notice.title,
                    description: notice.content,
                },
                {
                    headers: {
                        "Authorization": token
                    },
                }
            )
            .then((response) => console.log(response))
            .catch((error) => console.log(error));

        window.location.reload();
    };

    return (
        <div className="create-notice-registration-form">
            <div className="create-notice-header">
                <h1>Create Notice</h1>
            </div>
            <Paper elevation={6} className="create-notice-form-paper">
                <form onSubmit={handleSubmit}>
                    <div className="create-notice-form-input">
                    <label>Title</label>
                        <input
                            id="title"
                            name="title"
                            onChange={(e) =>
                                setNotice({ ...notice, title: e.target.value })
                            }
                        />
                    </div>
                    <div className="create-notice-form-input">
                    <label>Description</label>
                        <textarea
                            id="content"
                            name="content"
                            type="textarea"
                            rows={5}
                            onChange={(e) =>
                                setNotice({
                                    ...notice,
                                    content: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <Button type="submit"> Submit</Button>
                    </div>

                </form>
            </Paper>
        </div>
    );
};

export default CreateNoticeContent;

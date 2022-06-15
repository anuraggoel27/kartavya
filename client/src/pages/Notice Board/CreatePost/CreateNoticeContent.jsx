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
        <div className="create-notice-content">
            <div className="create-notice-header">
                <h1>Create Notice</h1>
            </div>
            <Paper className="create-notice-paper">
            <div className="create-notice-form">
                <form onSubmit={handleSubmit}>
                    <div className="create-notice-input-title">
                    {/* <label for="title">Title</label> */}
                        <input
                            placeholder="Title"
                            id="title"
                            name="title"
                            onChange={(e) =>
                                setNotice({ ...notice, title: e.target.value })
                            }
                        />
                    </div>
                    <div className="create-notice-input-desc">
                    {/* <label for="content">Description</label> */}
                        <textarea
                            placeholder="Content"
                            id="content"
                            name="content"
                            type="textarea"
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
                </div>
            </Paper>
        </div>
    );
};

export default CreateNoticeContent;

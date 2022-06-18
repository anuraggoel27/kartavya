import React, { useState } from "react";
import axios from "axios";
import { Paper} from "@material-ui/core";
import { Button} from "react-bootstrap";
import "../styles.css";
import { AiTwotoneFileUnknown } from "react-icons/ai";
import CustomModal from "../../../components/Modal";

const CreateNoticeContent = () => {
    const [notice, setNotice] = useState({
        title: "",
        content: "",
    });
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFailure, setOpenFailure] = useState(false);
    const handleCloseSuccess = () => {
        setOpenSuccess(false);
    };
    const handleCloseFailure=()=>{
        setOpenFailure(false);
    }
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
            .then((response) => {
                setOpenSuccess(true);
                setNotice({
                    title:"",
                    description:""
                })
                document.querySelector("form").reset();
            })
            .catch((error) => {
                setOpenFailure(true);
            });

        // window.location.reload();
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
            <CustomModal
                title="Success"
                message="Notice has been added successfully!"
                open={openSuccess}
                handleClose={handleCloseSuccess}
            />
            <CustomModal
                title="Failure"
                message="There was some error! Please try again!"
                open={openFailure}
                handleClose={handleCloseFailure}
            />
        </div>
    );
};

export default CreateNoticeContent;

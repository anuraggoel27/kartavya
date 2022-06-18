import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Paper } from "@material-ui/core";
import CustomModal from "../../components/Modal";

const StudyForm = () => {
    const [file, setFile] = useState();
    const [data, setData] = useState({
        name: "",
        class: "9",
        subject: "Maths",
    });
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFailure, setOpenFailure] = useState(false);
    const [openFileFailure, setOpenFileFailure] = useState(false);
    const handleCloseSuccess = () => {
        setOpenSuccess(false);
        window.location.reload();
    };
    const handleCloseFailure = () => {
        setOpenFailure(false);
    };
    const handleFileFailute=()=>{
        setOpenFileFailure(false);
    }
    const handleChange = (e) => {
        setFile(e.target.files[0]);
        setIsFilePicked(true);
    };
    const handleUpload = (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();
        console.log(file);
        var formdata = new FormData();
        if (file) {
            formdata.append("file", file);
            formdata.append("name", data.name);
            formdata.append("class", data.class);
            formdata.append("subject", data.subject);
            axios
                .post("http://localhost:5000/file/new", formdata, {
                    headers: {
                        Authorization: token,
                    },
                })
                .then((res) => {
                    setOpenSuccess(true);
                })
                .catch((err) => {
                    setOpenFailure(true);
                });
        } else {
            setOpenFileFailure(true);
        }
    };

    useEffect(() => {
        if (!file) {
            document.getElementById("sbtn").classList.add("disabled");
        } else {
            document.getElementById("sbtn").classList.remove("disabled");
        }
    }, [file]);
    return (
        <div className="study-registration-form">
            <Paper elevation={6} className="study-form-paper">
                <form
                    id="material-form"
                    onSubmit={handleUpload}
                    encType="multipart/form-data"
                >
                    <div className="study-form-input">
                        <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            type="text"
                            onChange={(e) =>
                                setData({ ...data, name: e.target.value })
                            }
                        />
                    </div>
                    <div className="study-form-input">
                        <label htmlFor="class">Class</label>
                        <select
                            name="class"
                            id="class"
                            onChange={(e) =>
                                setData({ ...data, class: e.target.value })
                            }
                        >
                            <option value={9}>9th</option>
                            <option value={10}>10th</option>
                            <option value={11}>11th</option>
                            <option value={12}>12th</option>
                        </select>
                    </div>
                    <div className="study-form-input">
                        <label htmlFor="subject">Subject</label>
                        <select
                            name="subject"
                            id="subject"
                            onChange={(e) =>
                                setData({ ...data, subject: e.target.value })
                            }
                        >
                            <option value="Maths">Maths</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Physics">Physics</option>
                            <option value="Biology">Biology</option>
                        </select>
                    </div>
                    <div className="study-form-input">
                        <label>File</label>
                        <input
                            type="file"
                            className="pdf-uploader"
                            onChange={handleChange}
                        />
                    </div>
                    <Button type="submit" id="sbtn">
                        Submit
                    </Button>
                </form>
            </Paper>
            <CustomModal
                title="Success"
                message="Material has been added successfully!"
                open={openSuccess}
                handleClose={handleCloseSuccess}
            />
            <CustomModal
                title="Failure"
                message="There was some error! Please try again!"
                open={openFailure}
                handleClose={handleCloseFailure}
            />
            <CustomModal
                title="Failure"
                message="Please attach a file before submitting"
                open={openFailure}
                handleClose={handleCloseFailure}
            />
        </div>
    );
};

export default StudyForm;

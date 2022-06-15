import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const AdminContent = ({ allowed }) => {
    const handleClick = () => {
        window.location = "http://localhost:3000/CreateNotice";
    };
    const [file, setFile] = useState();
    const [data, setData] = useState({
        name: "",
        class: "9",
        subject: "Maths",
    });
    const [isFilePicked, setIsFilePicked] = useState(false);
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
                .post("http://localhost:5000/file/new",
                    formdata,
                    {
                        
                        headers:{
                            "Authorization":token
                        }
                    }
                
                )
                .then((res) => {
                    console.log(res);
                    window.alert("File Uploaded Successfully");
                })
                .catch((err) => {
                    console.log(res);
                    window.alert("There was some error! Try again!");
                });
        } else {
            window.alert("Please attach a file before submitting!");
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
        <div className="admin-content" style={{ marginTop: "10rem" }}>
            <div className="post-create-button">
                <Button onClick={handleClick}>Create New Notice</Button>
            </div>
            <div className="pdf-submit">
                <form
                    id="material-form"
                    onSubmit={handleUpload}
                    encType="multipart/form-data"
                >
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        onChange={(e) =>
                            setData({ ...data, name: e.target.value })
                        }
                    />
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
                    <input
                        type="file"
                        className="pdf-uploader"
                        onChange={handleChange}
                    />
                    <Button type="submit" id="sbtn">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AdminContent;

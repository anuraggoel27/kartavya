import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "../../components/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Fab from "@material-ui/core/Fab";
import axios from "axios";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import SelectField from "./SelectField";
import * as Yup from "yup";
import "yup-phone";
import "./styles.css";

function QueryForm() {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        console.log("hello")
        setOpen(false);
    };
    const validate = Yup.object({
        name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        email: Yup.string().email("Email is invalid").required("Required"),
        number: Yup.string().phone("IN").required("Required"),
        courses: Yup.string().required("Required"),
    });
    return (
        <div className="query-form">
            <Formik
                className="form"
                initialValues={{
                    name: "",
                    email: "",
                    number: "",
                    courses: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                    setOpen(true);
                    axios
                        .post("http://localhost:3001/api/query", {
                            name: values.name,
                            email: values.email,
                            contact: values.number,
                            course: values.courses,
                        })
                        .then(function (response) {
                            // console.log(response);
                        })
                        .catch(function (error) {
                            // console.log(error);
                        });
                }}
            >
                {(formik) => (
                    <div className="formic-form">
                        <h1> Query</h1>
                        <Form>
                            <TextField label="Name" name="name" type="text" />
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                            />
                            <TextField
                                label="Number"
                                name="number"
                                type="tel"
                            />
                            <SelectField
                                label="Courses"
                                name="course"
                                type="text"
                            />
                            <Fab
                                variant="extended"
                                type="submit"
                                className="query-button"
                                color="inherit"
                            >
                                <img
                                    src="/images/submit.png"
                                    className="button-icon"
                                ></img>
                                Submit
                            </Fab>
                        </Form>
                    </div>
                )}
            </Formik>
            <Modal 
                title="Success"
                message="Your query has been submitted successfully!"
                open={open}
                handleClose={handleClose}
            />
            
        </div>
    );
}
export default QueryForm;

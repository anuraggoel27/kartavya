import axios from "axios";
import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import ClassStudents from "./ClassStudents";
import "./styles.css"; 
const EditStudents = () => {
    const [students, setStudents] = useState([]);
    const [students9, setStudents9] = useState([]);
    const [students10, setStudents10] = useState([]);
    const [students11, setStudents11] = useState([]);
    const [students12, setStudents12] = useState([]);

    useEffect(() => {
        const response = async () => {
            const token = localStorage.getItem("token");
            axios
                .get("http://localhost:5000/users/getStudents", {
                    headers: {
                        Authorization: token,
                    },
                })
                .then((res) => {
                    setStudents(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        response();
    }, []);
    useEffect(() => {
        const class9 = students.filter((student) => student.standard == 9);
        const class10 = students.filter((student) => student.standard == 10);
        const class11 = students.filter((student) => student.standard == 11);
        const class12 = students.filter((student) => student.standard == 12);

        setStudents9(class9);
        setStudents10(class10);
        setStudents11(class11);
        setStudents12(class12);
        console.log(students9);
    }, [students]);
    return (
        <div className="students-header">
            <div className="class-content">

                <h1>Class 9</h1>
                <ClassStudents data={students9} />
            </div>
            <div className="class-content">
            <h1>Class 10</h1>
                <ClassStudents data={students10} />
            </div>
            <div className="class-content">
            <h1>Class 11</h1>
                <ClassStudents data={students11} />
            </div>
            <div className="class-content">
            <h1>Class 12</h1>
                <ClassStudents data={students12} />
            </div>
        </div>
    );
};

export default EditStudents;

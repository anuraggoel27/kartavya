import { Paper } from "@material-ui/core";
import React,{useEffect,useState} from "react";
import EditStudentButton from "./EditStudentButton";
import "./styles.css";

const ClassStudents = (props) => {
    const [students,setStudents]=useState([]);
    useEffect(()=>{
        setStudents(props.data);
    },[props.data])
    return (
        <div>
            {students.map((student, index) => (
                <Paper className="student-paper" elevation={6} key={index}>
                    <div>
                        {student.firstName} {student.lastName}
                    </div>
                    <div>{student.roll}</div>
                    <EditStudentButton id={student._id} />
                </Paper>
            ))}
        </div>
    );
};

export default ClassStudents;

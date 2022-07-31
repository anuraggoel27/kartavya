import { IconButton } from '@material-ui/core';
import React from 'react'
import * as AiIcons from "react-icons/ai";
import "./styles.css"; 
const EditStudentButton = (props) => {
const handleEdit=()=>{
    window.location=`http://localhost:3000/editStudent/${props.id}`;
}
  return (
    <div className="edit-student-button">
        <IconButton onClick={handleEdit}><AiIcons.AiFillEdit/></IconButton>
    </div>
  )
}

export default EditStudentButton
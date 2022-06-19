import React from 'react'

const EditStudentButton = (props) => {
const handleEdit=()=>{
    window.location=`http://localhost:3000/editStudent/${props.id}`;
}
  return (
    <div>
        <button onClick={handleEdit}>Edit</button>
    </div>
  )
}

export default EditStudentButton
import React from 'react'
import { Button } from 'react-bootstrap'
const AdminContent = ({allowed}) => {
  const handleClick=()=>{
    window.location="http://localhost:3000/CreateNotice";
  }
  return (
    <div className="admin-content">
      <div className="post-create-button">
        <Button onClick={handleClick}>
          Create New Notice
        </Button>
      </div>
    </div>
  )
}

export default AdminContent
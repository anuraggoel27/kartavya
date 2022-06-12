import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import axios from "axios";

const AdminContent = ({allowed}) => {
  
  const handleClick=()=>{
    window.location="http://localhost:3000/CreateNotice";
  }
  const [file,setFile]=useState();
  const [isFilePicked, setIsFilePicked]=useState(false);
  const handleChange=(e)=>{
    setFile(e.target.files[0]);
    setIsFilePicked(true);
  }
  const handleUpload=()=>{
    var formdata=new FormData();
    if(file){
      formdata.append("file",file);
      axios.post("http://localhost:5000/file/new",formdata)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
    }else{
      window.alert("Please attach a file before submitting!")
    }
  }

  useEffect(()=>{
    if(!file){
      document.getElementById("sbtn").classList.add("disabled")
    }else{
      document.getElementById("sbtn").classList.remove("disabled");
    }
  },[file])
  return (
    <div className="admin-content" style={{marginTop:"10rem"}}>
      <div className="post-create-button">
        <Button onClick={handleClick}>
          Create New Notice
        </Button>
      </div>
      <div className="">
        <input type="file" className="pdf-uploader" onChange={handleChange} />
        <Button id="sbtn" onClick={handleUpload} className="pdf-submit">Submit</Button>
      </div>
    </div>

  )
}

export default AdminContent
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
const EditPostContent = () => {
  const params=useParams();
  const id = params.id;
  const [post,setPost]=useState({
    title:"",
    description:""
  })

  useEffect(() => {
    const response = async () => {
        const x = await axios
            .get(`http://localhost:5000/admin/notice/${id}`, {
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
            .then((res) => {
                setPost(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };
    response();
}, []);
  return (
    <div style={{marginTop:"10rem"}}>
        <input
        onChange={(e)=>setPost({...post,title:e.target.value})}
        value={(Object.keys(post).length!==0)?post.title:""}
        />
        <input
        onChange={(e)=>setPost({...post,description:e.target.value})}
         value={(Object.keys(post).length!==0)?post.description:""}/>
    </div>
  )
}

export default EditPostContent
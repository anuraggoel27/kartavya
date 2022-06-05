import React,{useState} from "react";
import axios from 'axios';

const CreateNoticeContent = () => {
    const [notice,setNotice]=useState({
        title:"",
        content:""
    })
    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/admin/createNotice/newNotice',
            {
                title:notice.title,
                description: notice.content
            },
            {
                withCredentials:true,
                headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials":true,
                }
            }
        )
        .then((response)=> 
            console.log(response)
            //add the code to either refresh the page or empty the  placeholders.
        )
        .catch((error) => console.log(error))
    };
    
    return (
        <div className="create-notice-content">
            <div className="create-notice-header"><h1>Create Notice</h1></div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Title" name="title" onChange={(e)=>setNotice({...notice,title:e.target.value})}/>
                <input placeholder="Content" name="content" onChange={(e)=>setNotice({...notice,content:e.target.value})}/>
                <div>
                    <button type="submit"> Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CreateNoticeContent;

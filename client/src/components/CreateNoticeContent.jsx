import React,{useState} from "react";

const CreateNoticeContent = () => {
    const [notice,setNotice]=useState({
        title:"",
        content:""
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(notice.title,notice.content);
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

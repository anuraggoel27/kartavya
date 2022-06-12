import React, { useState, useEffect } from "react";
import Top from "../../components/Top";
import { TopData } from "../../components/Topdata";
import axios from "axios";
function StudyMaterialContent() {
    const [material, setMaterial] = useState([]);
    useEffect(() => {
        const response=async()=>await axios
          .get("http://localhost:5000/file/getFiles")
          .then((res) => {
              setMaterial((res.data));
              console.log(material);
          })
          .catch((err) => console.log(err));
          response();
    },[]);
    return (
        <div className="course-container">
            <Top
                heading={TopData[5].heading}
                paragraph={TopData[5].paragraph}
                image={TopData[5].image}
            />
            <div className="studymaterial">
                {material.map((m, index) => {
                        return <div key={index} className="material">
                            <div className="material-name">{m.name}</div>
                            <div className="material-webview">
                                <a href={m.webViewLink}>View</a>
                            </div>
                            <div className="material-webContent">
                                <a href={m.webContentLink}>Download</a>
                            </div>
                        </div>;
                    })}
            </div>
        </div>
    );
}
export default StudyMaterialContent;

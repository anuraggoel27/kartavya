import React, { useState, useEffect,useContext } from "react";
import Top from "../../components/Top";
import { TopData } from "../../components/Topdata";
import axios from "axios";
import Tables from "./Tables";

export const MaterialContext=React.createContext();
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
                    <MaterialContext.Provider value={material}>
                        <Tables />
                    </MaterialContext.Provider>
            </div>
        </div>
    );
}
export default StudyMaterialContent;

import React from "react";
import Top from "../../components/Top";
import { TopData } from "../../components/Topdata";

function StudyMaterialContent() {
  
  return (
    <div className="course-container">
      <Top heading={TopData[5].heading} paragraph={TopData[5].paragraph} image={TopData[5].image}/>
    </div>
  );
}
export default StudyMaterialContent;

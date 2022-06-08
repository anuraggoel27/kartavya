import React from "react";
import Top from "../../components/Top";
import {TopData} from "../../components/Topdata";
function AboutContent() {
  return (
    <div className="aboout-container">
      <Top heading={TopData[0].heading} paragraph={TopData[0].paragraph} image={TopData[0].image} />
    </div>
  );
}
export default AboutContent;

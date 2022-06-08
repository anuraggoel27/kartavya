import React from "react";
import AchieverCard from "../../components/Card/Card";
import Top from "../../components/Top";
import { TopData } from "../../components/Topdata";
import Achievers from "./Acheivers";
import "./styles.css"

function AchievementContent() {
  return (
    <div className="achievement-container">
        <Top heading={TopData[1].heading} paragraph={TopData[1].paragraph}  image={TopData[1].image}/>
        <div className="achievers-card-section">
      {Achievers.map(function(Achiever, index){
        return <AchieverCard className="achievers-card" key={index} name={Achiever.Name} img={Achiever.imgUrl} text={Achiever.about} />
      })}
      </div>
    </div>
  );
}
export default AchievementContent;

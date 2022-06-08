import React from "react";
import AchieverCard from "../../components/Card/Card";
import Achievers from "./Acheivers";
import "./styles.css"
function AchievementContent() {
  return (
    <div className="achievement">
      <h1 className="achievers-heading">Our Achievers</h1>
      <p className="achievers-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className="achievers-main-image"
          src="/images/man.png"
          alt="University"
        ></img>
        <div className="achievers-card-section">
      {Achievers.map(function(Achiever, index){
        return <AchieverCard className="achievers-card" key={index} name={Achiever.Name} img={Achiever.imgUrl} text={Achiever.about} />
      })}
      </div>
    </div>
  );
}
export default AchievementContent;

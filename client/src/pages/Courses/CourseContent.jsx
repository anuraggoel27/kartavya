import React from "react";
import Top from "../../components/Top";
import { TopData } from "../../components/Topdata";
import CourseCard from "./CourseCard";
import {Courses} from "./CourseData";

function CourseContent() {
  return (
    <div className="course-container">
      <Top heading={TopData[3].heading} paragraph={TopData[3].paragraph} image={TopData[3].image}/>
      <div className="course-cards">
        {Courses.map((course,index)=>{
          return (<CourseCard key={index} className="course-card" heading={course.heading} subheading={course.subheading} image={course.image} about={course.about}/>)
        })}
      </div>
    </div>
  );
}
export default CourseContent;

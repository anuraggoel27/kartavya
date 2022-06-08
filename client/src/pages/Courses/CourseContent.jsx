import React from "react";
import CourseCard from "./CourseCard";
import {Courses} from "./CourseData";
function CourseContent() {
  return (
    <div className="course-body">
      <div className="CourseContent">
        <h1 className="course-heading">Courses</h1>
        <p className="course-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className="main-image"
          src="/images/videoconference.png"
        ></img>
      </div>
      <div className="course-cards">
        {Courses.map((course,id)=>{
          return (<CourseCard className="course-card" heading={course.heading} subheading={course.subheading} image={course.image} about={course.about}/>)
        })}
      </div>
    </div>
  );
}
export default CourseContent;

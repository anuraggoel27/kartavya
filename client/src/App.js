import "./styles.css";
import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Achievement from "./Achievement";
import Courses from "./Courses";
import About from "./About";
import Gallery from "./Gallery";
import StudyMaterial from "./StudyMaterial";
import AOS from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";

AOS.init();
export default function App() {
    return (
        <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/Contact" exact element={<Contact/>} />
                    <Route exact path="/Achievement" element={<Achievement/>} />
                    <Route exact path="/Courses" element={<Courses/>} />
                    <Route exact path="/About" element={<About/>} />
                    <Route exact path="/gallery" element={<Gallery/>} />
                    <Route
                        exact
                        path="/StudyMaterial"
                        element={<StudyMaterial/>}
                    />
                </Routes>
        </div>
    );
}

import "./styles.css";
import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Achievement from "./pages/Achievement";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import StudyMaterial from "./pages/StudyMaterial";
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

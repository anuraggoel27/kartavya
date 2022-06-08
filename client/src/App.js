import "./styles.css";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Achievement from "./pages/Achievers/Achievement";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import StudyMaterial from "./pages/Study Material/StudyMaterial";
import NoticeBoard from "./pages/Notice Board/NoticeBoard";
import CreateNotice from "./pages/Notice Board/CreatePost/CreateNotice";
import Admin from "./pages/Admin/Admin";
import AOS from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Notice from "./pages/Notice Board/Notice";
import EditPost from "./pages/Notice Board/EditPost/EditPost";
import Profile from "./pages/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import axios from "axios";

EditPost;
AOS.init();
export const UserContext = React.createContext();
export default function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUser = () => {
            axios
                .get("http://localhost:5000/auth/google/login/success", {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": true,
                    },
                })
                .then((response) => {
                    if (response.status === 200) return response.data;
                    throw new Error("authentication has been failed");
                })
                .then((resObject) => {
                    setUser(resObject.user);
                })
                .catch((error) => console.log(error));
        };
        getUser();
    }, []);
    return (
        <div className="App">
            <UserContext.Provider value={user}>
                <Header />
            </UserContext.Provider>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Contact" exact element={<Contact />} />
                <Route exact path="/Achievement" element={<Achievement />} />
                <Route exact path="/Courses" element={<Courses />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/gallery" element={<Gallery />} />
                <Route exact path="/NoticeBoard" element={<NoticeBoard />} />
                <Route exact path="/CreateNotice" element={<CreateNotice />} />
                <Route
                    exact
                    path="/StudyMaterial"
                    element={<StudyMaterial />}
                />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/Notice/:id" element={<Notice />} />
                <Route exact path="/editpost/:id" element={<EditPost />} />
                <Route exact path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
        </div>
    );
}

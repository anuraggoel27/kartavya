import "./styles.css";
import React, { useEffect, useState } from "react";
import HomeContent from "./pages/Home/HomeContent";
import ContactContent from "./pages/Contact/ContactContent";
import AchieversContent from "./pages/Achievers/AchieversContent";
import CourseContent from "./pages/Courses/CourseContent";
import AboutContent from "./pages/About/AboutContent";
import GalleryContent from "./pages/Gallery/GalleryContent";
import StudyMaterialContent from "./pages/Study Material/StudyMaterialContent";
import NoticeBoardContent from "./pages/Notice Board/NoticeBoardContent";
import CreateNoticeContent from "./pages/Notice Board/CreatePost/CreateNoticeContent";
import Admin from "./pages/Admin/Admin";
import AOS from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Notice from "./pages/Notice Board/Notice";
import EditPostContent from "./pages/Notice Board/EditPost/EditPostContent";
import ProfileContent from "./pages/Profile/ProfileContent";
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";
import { Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import axios from "axios";
import EditStudents from "./pages/Admin/EditStudents";


AOS.init();
export const UserContext = React.createContext();
export default function App() {
    const [user, setUser] = useState(null);
    const [isAdmin,setIsAdmin]=useState(false);
    useEffect(() => {
        const getUser = async() => {
            const token =localStorage.getItem("token");
            await axios.get("http://localhost:5000/users/isLogged",{
                headers:{
                    "Authorization":token
                }
            })
            .then((res)=>{
                const user=res.data.data;
                if(!user.firstName) setUser(user.username);
                else setUser(user.firstName); 
            })
            .catch((err)=>{
                localStorage.clear();
                console.log(err);
            })
        };
        getUser();
    }, []);
    
    useEffect(() => {
        const allow = async () => {
            const token = localStorage.getItem("token");
            await axios
                .get("http://localhost:5000/admin", {
                    headers: {
                        "Authorization": token
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        setIsAdmin(true);
                    }
                })
                .catch((error) => {
                    // window.alert("You need to login with an admin account to access the page");
                    // window.location = "http://localhost:3000";
                });
        };
        allow();
    }, []);
    return (
        <div className="App">
            <UserContext.Provider value={user}>
                <Header />
            </UserContext.Provider>
            <Routes>
                <Route exact path="/" element={<HomeContent/>} />
                <Route path="/Contact" exact element={<ContactContent />} />
                <Route exact path="/Achievement" element={<AchieversContent />} />
                <Route exact path="/Courses" element={<CourseContent />} />
                <Route exact path="/About" element={<AboutContent />} />
                <Route exact path="/gallery" element={<GalleryContent />} />
                <Route exact path="/NoticeBoard" element={<UserContext.Provider value={{isAdmin,user}}><NoticeBoardContent /></UserContext.Provider>} />
                <Route exact path="/CreateNotice" element={<CreateNoticeContent />} />
                <Route
                    exact
                    path="/StudyMaterial"
                    element={<UserContext.Provider value={{isAdmin,user}}><StudyMaterialContent /></UserContext.Provider>}
                />
                
                <Route exact path="/admin" element={<UserContext.Provider value={{isAdmin,user}}><Admin /></UserContext.Provider>} />
                
                <Route exact path="/Notice/:id" element={<Notice />} />
                <Route exact path="/editpost/:id" element={<EditPostContent />} />
                <Route exact path="/profile" element={<ProfileContent />} />
                <Route exact path="/auth/login" element={<Login/>} />
                <Route exact path="/auth/register" element={<Registration/>} />
                <Route exact path="/editStudent/:id" element={<Registration/>}/>
                <Route exact path="/students" element={<UserContext.Provider value={{isAdmin,user}}><EditStudents/></UserContext.Provider>}/>
            </Routes>
            <Footer />
            
        </div>
    );
}

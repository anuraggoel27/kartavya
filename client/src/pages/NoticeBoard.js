import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NoticeBoardContent from "../components/NoticeBoardContent";
const NoticeBoard=()=>{
    return(
        <div>
            <Header/>
            <NoticeBoardContent/>
            <Footer/>
        </div>
    )
}
export default NoticeBoard;
import React from "react";
import Particle from "../../components/Particle";
import QueryForm from "./QueryForm";
import ImageCarousel from "./ImageCarousel";
import Download from "./Download";
import Welcome from "./Welcome";
import Faculty from "./Faculty";
function Content() {
    return (
        <div className="content">
            <div className="top">
                <ImageCarousel />
                <QueryForm />
            </div>
            <Welcome />
            <Faculty />
            <Download />
        </div>
    );
}
export default Content;

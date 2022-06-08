import React from "react";
import Top from "../../components/Top";
import { TopData } from "../../components/Topdata";
import GalleryCard from "./GalleryCard";
import links from "./galleryPhotosLink";
import "./styles.css";

function GalleryContent() {
    return (
        <div className="achievement">
            <Top
                heading={TopData[4].heading}
                paragraph={TopData[4].paragraph}
                image={TopData[4].image}
            />
            <div className="gallery-content">
                <div className="gallery-card-section">
                    {links.map(function (Link, index) {
                        return (
                            <GalleryCard
                                className="gallery-card"
                                key={index}
                                img={Link.imgUrl}
                                text={Link.description}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default GalleryContent;

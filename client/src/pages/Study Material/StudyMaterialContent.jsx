import React, { useState, useEffect, useContext } from "react";
import Top from "../../components/Top";
import { TopData } from "../../components/Topdata";
import axios from "axios";
import CustomTable from "./Tables";

export const MaterialContext = React.createContext();
function StudyMaterialContent() {
    const [material, setMaterial] = useState([]);
    const [original, setOriginal] = useState([]);
    const [token, setToken] = useState("");
    useEffect(() => {
        const response = async () => {
            const token=localStorage.getItem("token");
            setToken(token);
            await axios
                .get("http://localhost:5000/file/getFiles", {
                    headers: {
                        Authorization: token,
                    },
                })
                .then((res) => {
                    setMaterial(res.data);
                    setOriginal(res.data);
                    console.log(material);
                })
                .catch((err) => {
                    console.log(err);
                    // window.alert('You need to login');
                    // window.location="http://localhost:3000"
                });
        };
        response();
    }, []);
   
    const [search, setSearch] = useState("");
    const handleSearch = async () => {
        console.log(search);
        if (search === "") {
            setMaterial(original);
            return;
        }
        await axios
            .get(`http://localhost:5000/file/getFile/${search}`, {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                if (res.data.lenght === 1) setMaterial([res.data]);
                else setMaterial(res.data);
            })
            .catch((err) => {
                console.log(err);
                // window.alert("You need to login");
                // window.location = "http://localhost:3000";
            });
    };
    useEffect(()=>{
        handleSearch();
    },[search])
    return (
        <div className="course-container">
            <Top
                heading={TopData[5].heading}
                paragraph={TopData[5].paragraph}
                image={TopData[5].image}
            />
            <div className="studymaterial">
                <div className="search-component">
                    <input
                        type="text"
                        onChange={async(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button onClick={() => setMaterial(original)}>Reset</button>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <CustomTable
                    titleRow={[
                        "Class",
                        "Subject",
                        "Name",
                        "Download",
                        "Delete",
                    ]}
                    data={material}
                />
            </div>
        </div>
    );
}
export default StudyMaterialContent;

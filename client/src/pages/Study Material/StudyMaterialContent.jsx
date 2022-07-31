import React, { useState, useEffect, useContext } from "react";
import Top from "../../components/Top";
import { TopData } from "../../components/Topdata";
import axios from "axios";
import CustomTable from "./Tables";
import { Fab, IconButton } from "@material-ui/core";
import * as AiIcons from "react-icons/ai";
import "./styles.css";
import { UserContext } from "../../App";

export const AdminContext = React.createContext();
function StudyMaterialContent() {
    const [material, setMaterial] = useState([]);
    const [original, setOriginal] = useState([]);
    const [token, setToken] = useState("");
    const { user, isAdmin } = useContext(UserContext);
    useEffect(() => {
        const response = async () => {
            const token = localStorage.getItem("token");
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
        if (search.length > 0) {
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
        } else if (search === "") {
            setMaterial(original);
            return;
        }
    };
    useEffect(() => {
        handleSearch();
    }, [search]);
    return (
        <div className="studymaterial">
            <h1 className="study-material-header">Study Material</h1>
            <div className="search-component">
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search"
                    onChange={async (e) => {
                        setSearch(e.target.value);
                    }}
                />
                <div className="search-buttons">
                    <IconButton
                        className="search-component-button"
                        onClick={() => {
                            setMaterial(original);
                            setSearch("");
                            document.getElementById("search-input").value = "";
                        }}
                    >
                        <AiIcons.AiFillDelete />
                    </IconButton>
                    <IconButton
                        className="search-component-button"
                        onClick={handleSearch}
                    >
                        <AiIcons.AiOutlineSearch />
                    </IconButton>
                </div>
            </div>
            <AdminContext.Provider value={isAdmin}>
                <CustomTable
                    titleRow={["Class", "Subject", "Name", "Download"]}
                    data={material}
                />
            </AdminContext.Provider>
        </div>
    );
}
export default StudyMaterialContent;

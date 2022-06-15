import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import * as RiIcons from "react-icons/ri";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import axios from "axios";
import "./styles.css";

export default function CustomTable(props) {
    const [page, setPage] = useState(0);
    let count = props.data.length;
    const handleFirstPage = () => {
        setPage(0);
    };
    const handleNextPage = () => {
        setPage((page) => page + 1);
    };
    const handlePrePage = () => {
        setPage((page) => page - 1);
    };
    const handleLastPage = () => {
        setPage(Math.max(0, Math.ceil(count / 5) - 1));
    };
    const handleDelete = async (fileId) => {
        const token = localStorage.getItem("token");
        axios
            .delete("http://localhost:5000/file/delete", {
                data: {
                    fileId: fileId,
                },
                headers:{
                    "Authorization":token
                }
            })
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
            .catch((err) =>{
                
                console.log(err)});
                window.alert('You need to login with an admin account')
                window.location="http://localhost:3000"
    };
    return (
        <table className="study-material-table">
            <tbody>
                <tr className="title-row">
                    {props.titleRow.map((tr, index) => {
                        return (
                            <th
                                key={index}
                                className="title-cell table-subject"
                            >
                                {tr}
                            </th>
                        );
                    })}
                </tr>
                {(5 > 0
                    ? props.data.slice(page * 5, page * 5 + 5)
                    : props.data
                ).map((d, index) => {
                    return (
                        <tr key={index} className="material-row">
                            <td className="cell">{d.class}</td>
                            <td className="cell">{d.subject}</td>
                            <td className="cell">{d.name}</td>
                            <td className="cell">
                                <a href={d.webContentLink}>
                                    <RiIcons.RiDownloadLine />
                                </a>
                            </td>
                            <td className="cell">
                                <IconButton
                                    onClick={() => handleDelete(d.fileId)}
                                >
                                    <RiIcons.RiDeleteBin6Line />
                                </IconButton>
                            </td>
                        </tr>
                    );
                })}
                <tr className="table-footer">
                    <td colSpan={5}>
                        <IconButton
                            onClick={handleFirstPage}
                            disabled={page === 0}
                        >
                            <FirstPageIcon />
                        </IconButton>

                        <IconButton
                            onClick={handlePrePage}
                            disabled={page === 0}
                        >
                            <KeyboardArrowLeft />
                        </IconButton>

                        <IconButton
                            onClick={handleNextPage}
                            disabled={page >= Math.ceil(count / 5) - 1}
                        >
                            <KeyboardArrowRight />
                        </IconButton>

                        <IconButton
                            onClick={handleLastPage}
                            disabled={page >= Math.ceil(count / 5) - 1}
                        >
                            <LastPageIcon />
                        </IconButton>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

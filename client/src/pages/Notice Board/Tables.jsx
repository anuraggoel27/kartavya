import React, { useState, useEffect, useContext } from "react";
import { IconButton } from "@material-ui/core";
import * as RiIcons from "react-icons/ri";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import axios from "axios";
import { Link } from "react-router-dom";
import { AdminContext } from "./NoticeBoardContent";
import "./styles.css";

export default function CustomTable(props) {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const { isAdmin, user } = useContext(AdminContext);
    useEffect(() => {
        const response = async () => {
            const token = localStorage.getItem("token");
            const x = await axios
                .get("http://localhost:5000/notices", {
                    headers: {
                        Authorization: token,
                    },
                })
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        response();
    }, []);
    let count = data.length;
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
    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");
        await axios
            .get(`http://localhost:5000/notices/deleteNotice/${id}`, {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                window.alert("You need to be an admin to delete the post");
            });
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
                {user &&
                    (5 > 0 ? data.slice(page * 5, page * 5 + 5) : data).map(
                        (d, index) => {
                            return (
                                <tr key={index} className="material-row">
                                    <td className="cell">{index + 1}</td>
                                    <td className="cell">
                                        {d.createdAt.split("T")[0]}
                                    </td>
                                    <td className="cell">
                                        <Link to={`/notice/${d._id}`}>
                                            {d.title}
                                        </Link>
                                    </td>

                                    <td className="cell">
                                        <IconButton
                                            onClick={() => handleDelete(d._id)}
                                        >
                                            <RiIcons.RiDeleteBin6Line />
                                        </IconButton>
                                    </td>
                                </tr>
                            );
                        }
                    )}
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

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Notice from "./Notice";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableFooter,
    TableRow,
    Paper,
    TableHead,
    Button,
    Checkbox,
} from "@material-ui/core";
import TablePaginationActions from "./TablePaginationActions";
import { Route, Routes, Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
    table: {
        minWidth: 200,
    },
});

function createData(name, calories, fat) {
    return { name, calories, fat };
}

// const rows = [
//     createData("Cupcake", 305, 3.7),
//     createData("Donut", 452, 25.0),
//     createData("Eclair", 262, 16.0),
//     createData("Frozen yoghurt", 159, 6.0),
//     createData("Gingerbread", 356, 16.0),
//     createData("Honeycomb", 408, 3.2),
//     createData("Ice cream sandwich", 237, 9.0),
//     createData("Jelly Bean", 375, 0.0),
//     createData("KitKat", 518, 26.0),
//     createData("Lollipop", 392, 0.2),
//     createData("Marshmallow", 318, 0),
//     createData("Nougat", 360, 19.0),
//     createData("Oreo", 437, 18.0),
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomTable() {
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [data, setData] = useState([]);
    const [selectedNotice, setSelectedNotice] = useState([]);
    useEffect(() => {
        const response = async () => {
            const x = await axios
                .get("http://localhost:5000/admin/notices", {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": true,
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

    const handleClick = async (id) => {
        await axios
            .get(`http://localhost:5000/admin/deletePost/${id}`, {
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
            .then((res) => {
                console.log(res);
                window.location.reload()
            })
            .catch((err) => console.log(err));
    };

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <TableContainer component={Paper}>
            <Table
                className={classes.table}
                aria-label="custom pagination table"
            >
                <TableHead>
                    <TableRow>
                        <StyledTableCell>S. No.</StyledTableCell>
                        <StyledTableCell align="left">Date</StyledTableCell>
                        <StyledTableCell align="left">Title</StyledTableCell>
                        <StyledTableCell align="center">Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? data.slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                          )
                        : data
                    ).reverse().map((data, id) => (
                        <TableRow key={id}>
                            <TableCell style={{ width: 80 }} align="left">
                                {id + 1}
                            </TableCell>

                            <TableCell style={{ width: 160 }} align="left">
                                {data.createdAt.split("T")[0]}
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">
                                <Link to={`/notice/${data._id}`}>
                                    {data.title}
                                </Link>
                            </TableCell>
                            <TableCell align="left">
                                <Button
                                    onClick={(e) => {
                                        handleClick(data._id);
                                    }}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[
                                5,
                                10,
                                25,
                                { label: "All", value: -1 },
                            ]}
                            colSpan={3}
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { "aria-label": "rows per page" },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

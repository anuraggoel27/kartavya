import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
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
    IconButton,
} from "@material-ui/core";
import TablePaginationActions from "./TablePaginationAction";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import { MaterialContext } from "./StudyMaterialContent";
import axios from "axios";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import "./styles.css";

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

export default function CustomTable() {
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const data = useContext(MaterialContext);
    let count = 1;
    console.log(data);
    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

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
        setPage(Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    const handleDelete = (fileId) => {
        axios
            .delete("http://localhost:5000/file/delete", {
                data: {
                    fileId: fileId,
                },
            })
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };
    return (
        // <TableContainer component={Paper}>
        //     <Table
        //         className={`${classes.table} study-table`}
        //         aria-label="custom pagination table"
        //     >
        //         <TableHead>
        //             <TableRow>
        //                 <StyledTableCell>S. No.</StyledTableCell>
        //                 <StyledTableCell align="center">Subject</StyledTableCell>
        //                 <StyledTableCell align="center">Name</StyledTableCell>
        //                 {/* <StyledTableCell align="center">View</StyledTableCell> */}
        //                 <StyledTableCell align="center">Download</StyledTableCell>
        //                 <StyledTableCell align="center">Delete</StyledTableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {(rowsPerPage > 0
        //                 ? data.slice(
        //                       page * rowsPerPage,
        //                       page * rowsPerPage + rowsPerPage
        //                   )
        //                 : data
        //             ).map((data, index) => (
        //                 <TableRow key={index}>
        //                     <TableCell style={{ width: 80 }} align="left">
        //                         {count++}
        //                     </TableCell>
        //                     <TableCell style={{ width: 80 }} align="left">
        //                         {data.subject}
        //                     </TableCell>
        //                     <TableCell component="th" scope="row" align="center">
        //                         {data.name}
        //                     </TableCell>

        //                     {/* <TableCell  align="center">
        //                         <a href={data.webViewLink}>
        //                             <AiIcons.AiFillEye/>
        //                         </a>
        //                     </TableCell> */}
        //                     <TableCell align="center">
        //                         <a href={data.webContentLink}>
        //                         <RiIcons.RiDownloadLine/>
        //                         </a>
        //                     </TableCell>
        //                     <TableCell align="center">
        //                         <Button className="study-material-delete" onClick={()=>handleDelete(data.fileId)}>Delete</Button>
        //                     </TableCell>
        //                 </TableRow>
        //             ))}

        //             {emptyRows > 0 && (
        //                 <TableRow style={{ height: 53 * emptyRows }}>
        //                     <TableCell colSpan={6} />
        //                 </TableRow>
        //             )}
        //         </TableBody>
        //         {/* <TableFooter className="studymaterial-footer">
        //             <TableRow>
        //                 <TablePagination
        //                     rowsPerPageOptions={[]}
        //                     labelRowsPerPage=""
        //                     colSpan={4}
        //                     count={data.length}
        //                     rowsPerPage={rowsPerPage}
        //                     page={page}
        //                     onPageChange={handleChangePage}
        //                     ActionsComponent={TablePaginationActions}
        //                 />
        //             </TableRow>
        //         </TableFooter> */}
        // <div>

        //         <IconButton onClick={handleFirstPage} disabled={page===0}><FirstPageIcon/></IconButton>
        //         <IconButton onClick={handlePrePage} disabled={page===0}><KeyboardArrowLeft/></IconButton>
        //         <IconButton onClick={handleNextPage} disabled={page===page >= Math.ceil(count / rowsPerPage) - 1}><KeyboardArrowRight/></IconButton>
        //         <IconButton onClick={handleLastPage} disabled={page >= Math.ceil(count / rowsPerPage) - 1}><LastPageIcon/></IconButton>

        // </div>
        //     </Table>
        // </TableContainer>
        <table className="study-material-table">
            <tbody>
                <tr className="title-row">
                    {/* <th className="title-cell table-sno">S. No.</th> */}
                    <th className="title-cell table-subject">Subject</th>
                    <th className="title-cell table-name">Name</th>
                    <th className="title-cell table-download">Download</th>
                    <th className="title-cell table-delete">Delete</th>
                </tr>
                {(rowsPerPage > 0
                    ? data.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                      )
                    : data
                ).map((data, index) => {
                    return (
                        <tr key={index} className="material-row">
                            {/* <td className="cell-sno">{data.createdAt}</td> */}
                            <td className="cell-subject">{data.subject}</td>
                            <td className="cell-name">{data.name}</td>
                            <td className="cell-downloaf">
                                <a href={data.webContentLink}>
                                    <RiIcons.RiDownloadLine />
                                </a>
                            </td>
                            <td className="cell-delete">
                                <IconButton
                                    onClick={() => handleDelete(data.fileId)}
                                >
                                    <RiIcons.RiDeleteBin6Line />
                                </IconButton>
                            </td>
                        </tr>
                    );
                })}
                <tr className="table-footer">
                    <td colSpan={4}>
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
                            disabled={
                                page >= Math.ceil(count / rowsPerPage) - 1
                            }
                        >
                            <KeyboardArrowRight />
                        </IconButton>

                        <IconButton
                            onClick={handleLastPage}
                            disabled={
                                page >= Math.ceil(count / rowsPerPage) - 1
                            }
                        >
                            <LastPageIcon />
                        </IconButton>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

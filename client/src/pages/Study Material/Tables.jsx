import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import "./styles.css";
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
} from "@material-ui/core";
import TablePaginationActions from "./TablePaginationAction";
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from "react-icons/ai";
// import "./styles.css";
import { MaterialContext } from "./StudyMaterialContent";


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
    const data=useContext(MaterialContext);
    console.log(data);
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
                        <StyledTableCell align="center">Subject</StyledTableCell>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">View</StyledTableCell>
                        <StyledTableCell align="center">Download</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? data.slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                          )
                        : data
                    ).map((data, id) => (
                        <TableRow key={id}>
                            <TableCell style={{ width: 80 }} align="left">
                                {id + 1}
                            </TableCell>
                            <TableCell style={{ width: 80 }} align="left">
                                {data.subject}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {data.name}
                            </TableCell>

                            <TableCell  align="center">
                                <a href={data.webViewLink}>
                                    <AiIcons.AiFillEye/>
                                </a>
                            </TableCell>
                            <TableCell align="center">
                                <a href={data.webContentLink}>
                                <RiIcons.RiDownloadLine/>
                                </a>
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter className="noticeboard-footer">
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

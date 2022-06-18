import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(5, 4, 5),
    },
}));
const CustomModal = (props) => {
    const[open,setOpen]=useState(false);
    const classes = useStyles();
    useEffect(()=>{
        setOpen(props.open);
    },[props.open])
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                {/* <Fade in={open}> */}
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">{props?.title}</h2>
                        <p id="transition-modal-description">
                            {props?.message}
                        </p>
                    </div>
                {/* </Fade> */}
            </Modal>
        </div>
    );
};

export default CustomModal;

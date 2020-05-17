import React from 'react';
import classes from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../../hoc/Aux";

const modal = (props) => {
    const showClass = `${classes.Modal} ${props.show ? classes.Show : classes.Hide}`;
    return (
        <Aux>
            <div
                className={showClass}>
                {props.children}
            </div>
            <Backdrop
                clicked={props.modalClosed}
                show={props.show}/>
        </Aux>
    );
};

export default modal;

import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
    return (
        <span>
            {props.show ? <div
                onClick={props.clicked}
                className={classes.Backdrop}></div> : null}
        </span>
    );
};

export default backdrop;

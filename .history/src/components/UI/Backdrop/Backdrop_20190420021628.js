import React from 'react';
import classes from '../Backdrop/Backdrop.css';

const backdrop  = (props) => (
    props.show ? <div classes={classes.Backdrop} onClick={props.clicked}></div> : null
)

export default backdrop;
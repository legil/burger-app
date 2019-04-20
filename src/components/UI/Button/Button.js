import React from 'react';

import classes from '../Button/Button.css';

const button = (props) =>(
    <button className={[classes.Button, classes[props.btnType]].join(' ')} //assigning array of strings (list) classes 
            onClick={props.clicked}>{props.children}</button>
)

export default button;
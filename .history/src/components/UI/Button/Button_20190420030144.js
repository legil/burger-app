import React from 'react';

import classes from '../Button/Button.css';

const button = (props) =>(
    <button className={[classes.Button, classes[props.btnType]].join(' ')} //assigning array of strings (list) classes 
            onClicked={props.clicked}>{props.children}</button>
)

export default button;
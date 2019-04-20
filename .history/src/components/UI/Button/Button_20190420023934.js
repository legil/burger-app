import React from 'react';

import classes from '../Button/Button';

const button = (props) =>(
    <button className={classes.Button}
            onClicked={props.clicked}>{props.children}</button>
)

export default button;
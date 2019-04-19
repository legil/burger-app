import React from 'react';

import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients) //turns into an array of keys 
                                    .map(igKey => {
                                        return <li><span>{igKey}</span>: {props.ingredients[igKey]}</li>
                                    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>

            </ul>
        </Aux>
    );
}

export default orderSummary;
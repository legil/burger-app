import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';


class BurgerBuilder extends Component{
//     constructor(props){
//         super(props);
//         this.state - {...}
//     } 

state = {
    ingredients: {
        salad: 0,
        bacon: 1,
        cheese: 0,
        meat: 0
    }
}


    render () {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <div>Build Controls</div>
      
            </Aux>
            
        );
    }
}

export default BurgerBuilder;
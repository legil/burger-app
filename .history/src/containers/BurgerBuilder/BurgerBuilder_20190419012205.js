import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


class BurgerBuilder extends Component{
//     constructor(props){
//         super(props);
//         this.state - {...}
//     } 

state = {
    ingredients: {
        salad: 0,
        bacon: 3,
        cheese: 0,
        meat: 0
    }
}

addIngredientHandler = (type) => {

}

removeIngredientHandler = (type) => {

}


    render () {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls />
      
            </Aux>
            
        );
    }
}

export default BurgerBuilder;
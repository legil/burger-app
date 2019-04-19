import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const  INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component{
//     constructor(props){
//         super(props);
//         this.state - {...}
//     } 

state = {
    ingredients: {
        salad: 1,
        bacon: 3,
        cheese: 0,
        meat: 0
    },
    totalPrice: 8
}

addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

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
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
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
    }
}




export default BurgerBuilder;
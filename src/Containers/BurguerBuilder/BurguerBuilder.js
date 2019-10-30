import React, { Component } from "react";
import Auxiliar from "../../hoc/Auxiliar";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICE = {
  salad: 0.5,
  bacon: 0.6,
  meat: 1.5,
  cheese: 0.3
};

class BurguerBuilder extends Component {
  // constructor(props){
  //     super(props);
  //     this.state = {}
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients).map(igkey =>{
      return ingredients[igkey];
     })
     .reduce((sum,el)=>{ 
       return sum + el
      },0);

    this.setState({purchasable: sum > 0 })

  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.setState({ ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);

  };

    purchaseHandler = () =>{
      this.setState({purchasing: true})
    }

    purchaseCancelHandler = () =>{
      this.setState({purchasing: false})
    }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Auxiliar>
        <Modal
        show={this.state.purchasing}
        modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
           ingredients={this.state.ingredients}
           totalPrice={this.state.totalPrice}
           />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientsHandler}
          price={this.state.totalPrice}
          disabled={disabledInfo}
          ordered={this.purchaseHandler}
          purchasable={this.state.purchasable}
        />
      </Auxiliar>
    );
  }
}

export default BurguerBuilder;

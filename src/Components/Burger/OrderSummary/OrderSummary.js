import React from 'react';
import Auxiliar from '../../../hoc/Auxiliar'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(igkey=>{
        return <li key={igkey}><span style={{textTransform:"capitalize"}}>{igkey}</span>: {props.ingredients[igkey]}</li>
    })
    return(    
        <Auxiliar>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)} </strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.purchaseCanceld} btnType='Danger'>Cancel</Button>
            <Button clicked={props.purchaseContinued} btnType='Success'>Continue</Button>
        </Auxiliar>);
}

export default orderSummary;
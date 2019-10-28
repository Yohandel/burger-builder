import React from 'react';
import Auxiliar from '../../../hoc/Auxiliar'

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
            <p>Continue to checkout?</p>
        </Auxiliar>);
}

export default orderSummary;
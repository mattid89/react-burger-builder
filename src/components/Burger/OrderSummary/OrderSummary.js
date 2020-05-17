import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from "../../Layout/UI/Button/Button";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseContinued} btnType={'Success'}>CONTINUE</Button>
            <Button clicked={props.purchaseCanceled} btnType={'Danger'}>CANCEL</Button>
        </Aux>
    );
};

export default orderSummary;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

let StripeCheckoutButton = ({ price }) => {
    let priceForStripe = price * 100;
    let publishableKey = "pk_test_51HrWFKBSH6BMR2aHAdeCCOX6elxf289ajP9PJUqLJmHbbl3Y6AF65zELILejmI4bV8XMFrx518VlMgIYAQwvUGqi00PCmGJB3U"

    let onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
        label= "Pay Now"
        name = "CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}/>
    )
}

export default StripeCheckoutButton
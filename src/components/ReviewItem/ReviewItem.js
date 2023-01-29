import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, img, price, shipping} = props.product;
    return (
        <div>
            <h3>this is review items: {name}</h3>
            <h3>this is review items: {price}</h3>
            <h3>this is review items: {quantity}</h3>
        </div>
    );
};

export default ReviewItem;
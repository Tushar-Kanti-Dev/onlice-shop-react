import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {product, handelRemoveProduct} = props
    const {name, quantity, img, price, shipping} = props.product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-items-details-container">
                <div className="review-item-details">
                    <p className='item-name' title={name}>
                        {name.length>20 ? name.slice(0, 20)+'...': name}
                        </p>
                    <p>Price: <small className='price-color'>${price}</small></p>
                    <p>Quantity:<small className='price-color'> {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handelRemoveProduct(product)} className='delete-button'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
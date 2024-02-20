import React from 'react';
import { useSelector } from "react-redux";
import { useParams} from 'react-router-dom';

function AddToCart() {
    // const {id} = useParams()
    const cart = useSelector(state => state.cart);
    console.log(cart,"cart")
    return (
        <div>
            <div style={{ border: '1px solid black' }}>
                {cart.map(item => {
                    return (
                        <div key={item.id}>
                           <img width={100} src={item.imageUrl[0]}/> <h3>{item.title} - Rs. {item.price}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AddToCart;

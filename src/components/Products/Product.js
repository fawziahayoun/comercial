import React, { useContext } from "react";
import css from "./Products.css";
import {ShopContext} from "../context/ShopeContext";
export const   Product = (props)  =>{

    
    const {id,  productName, price , productImage} = props.data;
    const {addCart , cartItem} = useContext(ShopContext);
    const cartitemAmount = cartItem[id];
    return(
        <>
        <div className=" product text-center">
            <img className="image" src={productImage} alt="product"/>
            <div className="description">
                <h2  className=" pt-2 pb-1 text-warning">{productName}</h2>
                <p className=" text-info fs-4">${price}</p>
                <button className="btn btn-warning text-dark fw-bold mb-3" onClick={() => addCart(id)}>add Cart{cartitemAmount > 0 && <>({cartitemAmount})</>}</button>
            </div>

            </div>
        </>

        
    )
}
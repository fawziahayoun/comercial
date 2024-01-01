import { useContext } from "react";
import css from "../../components/Products/Products.css";
import { ShopContext } from "../../components/context/ShopeContext";
export const   CartItems = (props)  =>{
    const {cartItem, removeCart,addCart, updateItemCount} = useContext(ShopContext);

    
    const {id,  productName, price , productImage} = props.data;
    
    return(
        <>
        <div className=" product text-center">
            <img className="image" src={productImage} alt="product"/>
            <div className="description">
            <h2  className=" pt-2 pb-1 text-warning">{productName}</h2>
                <p className=" text-info fs-4">${price}</p>

                <div className="text-center">
                <button className="btn btn-primary mb-1 fw-bold" onClick={() => addCart(id)}>+</button>
                <input className="text-center fw-bold"   value={cartItem[id]} 
                onChange={ (e) => updateItemCount(Number(e.target.value),id)}/>
                <button className="btn btn-danger

             mb-1 fw-bold" onClick={() => removeCart(id)}>-</button>

            </div>


            </div>
            
              

            
               </div>
        </>

        
    )
}
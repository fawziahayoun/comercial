import react, { useContext } from "react";
import { PRODUCTS } from "../../components/Products/products";
import { ShopContext } from "../../components/context/ShopeContext";
import { CartItems } from "./Cartitems";
import { useNavigate } from "react-router-dom";
export const  Cart = () => {
    const {cartItem, getTotalCartAmont} = useContext(ShopContext);
    const totalamount = getTotalCartAmont();

    const navigate = useNavigate();




    return(
        <div className="  pt-5 pb-5 bg-dark text-center">
            <div className="container">
            <h1 className="text-center pb-4 text-light">Your Cart Item</h1>

            <div className="products">

                {PRODUCTS.map((product) => {
              if (cartItem[product.id] !== 0) {
                return<CartItems  data={product}/>
              }
                }

                )}
            </div>
            {totalamount > 0 ? (
            <div className="pt-2 pb-2 text-center">

            <p className="text-light fs-4   fw-bold mt-3 mb-4">Subtotal :
              <span className="text-info fs-4  fw-bold"> $ {totalamount}</span> </p>
            <button onClick={(e)=> navigate("/")} className=" btn btn-info fw-bold fs-3 text-light me-2">Continue Shopping</button>
            <button className="btn btn-warning fs-3 text-light fw-bold ms-2">Checkout</button>
            </div>
            ): (
                <h1 className="text-center ">Your Cart is Empty</h1>
            ) 
        }

           


</div>
        </div>
    )
}
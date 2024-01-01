import react from "react";
import Slider from "../../components/slider/Slider";
import {PRODUCTS} from "../../components/Products/products";
import {Product} from "../../components/Products/Product";
import css from "../../components/Products/Products.css"
import { Link } from "react-router-dom";

export default function Home() {

    return(
        <>
        <Slider/>
        
        <div className="home text-center bg-dark ">
            <h1>Products</h1>
            <div className="products  container pt-5 pb-5 ">
            {PRODUCTS.map((product) => {
                return(
                    < Product data={product} className="produc"/>
                )
            })}

            </div>


        <Link to="/cart"> <button className="btn btn-info mb-4 text-light fw-bold fs-4">Show Added Catds</button></Link>   
          


        </div>

        </>
    )
}
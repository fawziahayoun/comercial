import  ReactDOM  from "react-dom";
import css from "./loader.css";
import loadImg from "../../assets/loading.jpg"

export default function Loader(){
    return ReactDOM.createRortal(
    <div>
            <div className="">
                <img src=""  alt="loading..."/>
            </div>

    </div>,
    document.getElementById("loader")

    )
}
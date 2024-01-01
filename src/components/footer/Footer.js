import react from "react";
import css from "./Footer.css"
export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return(
        <>
        <div  className='footer'>&copy; {year} All right Resirved </div>
        </>
    )
}
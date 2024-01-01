import {useState} from "react";
import { Link } from "react-router-dom";
import css from "./auth.css";
import market from "../../assets/rset.jpg";
import { Cart } from "../cart/Cart";

import { toast} from 'react-toastify';
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/config";
export default function Reset(){
  const [email, setEmail] = useState();
  
  const resetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email).then(() => {
      toast.success("check your email for reset")
    }).catch((error) => {
      toast.error(error.message)
    })


  }

  return(
    <section className="container d-lg-flex  pt-5 pb-5   ">
      <div className="img mb-md-4 ">
            <img    src={market}   alt="login"/>
        </div>
       
       
        <div className="form">
            <h2 className=" text-center title-login ">Reset Password</h2>
        <form onSubmit={resetPassword}>
  <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="Your email" 
    value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  
  <button type="submit" className="btn btn-primary mb-2"  >Reset Password</button>
</form>
            <div className="links-control" ><Link className="link" to='/login'>-Login</Link>
            <Link className="link" to='/Register'>-Register</Link></div>
        </div>

        
        


    </section>
  )  
}
import React from "react";
import { Link , useNavigate} from "react-router-dom";

import market from "../../assets/mark3.jpg";
import { Cart } from "../cart/Cart";
import { useState } from "react";
import {toast} from 'react-toastify';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/config";


export default function Register(){

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword]= useState();

  const navigate = useNavigate();

  const onSabmit = (e) => {
    e.preventDefault();
    if(password !== cPassword){

      toast.error("password do not match ")
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      toast.success("Registration successful");
      navigate("/login");


  
    })
    .catch((error) => {
      toast.error(error.message);

    })
  };



  return(
    <>
    <section className="container d-lg-flex  pt-5 pb-5   ">
       
        
        <div className="form">
            <h2 className=" text-center title-login ">Register</h2>
        <form onSubmit={onSabmit}>
  <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1"
     aria-describedby="emailHelp" placeholder="Your email"
      value={email} onChange={(e)=> setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" id="exampleInputPassword1"
     placeholder="Your Pasword" value={password} onChange={(e)=> setPassword(e.target.value)}/>
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" id="exampleInputPassword2" 
    placeholder="confirm Pasword" value={cPassword} onChange={(e)=> setCPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary mb-2"  >login</button>
</form>
            <p className="text-center mt-2">Already on account? <span><Link className="link" to='/login'>Login</Link></span> </p>
        </div>         

        <div className="img mb-md-4 text-center ">
            <img    src={market}   alt="login"/>
        </div>
        


    </section>
    </>
  )  
}
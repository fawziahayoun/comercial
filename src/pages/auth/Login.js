import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {FaGoogle} from "react-icons/fa";
import css from "./auth.css";
import market from "../../assets/mark1.jpg";
import { Cart } from "../cart/Cart";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/config";
export default function Login(){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const userLogin = (e) => {
    e.preventDefault();
    

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //const user = userCredential.user;
      toast.success("Registration successfully");
      navigate("/");


  
    })
    .catch((error) => {
      toast.error(error.message);
    })
  };
  const provider = new GoogleAuthProvider();
   const signInWithGoogle= ()=> {
    signInWithPopup(auth, provider).then((result) => {
      //const user = result.user;
      toast.success("login successfully");
      navigate("/");
    }).catch((error) => {
      toast(error.message);

    });
  }
  return( 
    <>
    <ToastContainer/>
    <section className="container d-lg-flex  pt-5 pb-5  ">
        <div className="img mb-md-4 ">
            <img    src={market}   alt="login"/>
        </div>
        <div className="form">
            <h2 className=" text-center  title-login">login</h2>
        <form onSubmit={userLogin}>
  <div className="">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"
     aria-describedby="emailHelp"
      placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" 
    placeholder="Your Pasword"  value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary mb-2"  >login</button>
</form>
<div   ><Link className="link" to="/reset">Reset Password</Link></div>
<p className="text-center">--or--</p>
        <button type="submit" className="btn btn-danger " onClick={signInWithGoogle}  >
            <FaGoogle color="#fff"/> login With Google</button>
            <p className="text-center mt-2">Do Not Have account?register</p>
        </div>
    </section>
    </>
  )  
}
import { useEffect, useState } from "react";
import css from "./Header.css";
import {Link, useNavigate} from "react-router-dom";
import {FaBars, FaShoppingCart, FaUserCircle} from "react-icons/fa";
import {onAuthStateChanged, signOut} from "firebase/auth";
import auth from "../../firebase/config"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER ,REMOVE_ACTIVE_USER} from "../../redux/slice/Slice";
import HeadingLogOut from "../../components/headingLink/HeadingLogOut";
import HeadingLogin  from "../../components/headingLink/HeadingLogin";

export default function Header() {
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState("");
    /*useEffect(() =>  {
    onAuthStateChanged(auth, (user)=> {
      if(user){

        if(user.displayName == null){
          const ul = user.email.substring(0, user.email.indexOf("@"));
          const   uName = ul.charAt(0).toUpperCase() + ul.slice(1);
          setDisplayName(uName);


        }else{
          setDisplayName(user.displayName);
        }
        dispatch(SET_ACTIVE_USER({
          userName: user.displayName ? user.displayName : displayName,
          email: user.email,
          userID:user.userID,
        }));
        

      }else{
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER())
      }
    })
   

  }, [dispatch, displayName]);*/
    
 const navigate = useNavigate();
    const singout =() => {
      signOut(auth).then(() => {
        toast.success("logOut is successfuly");
        navigate("/");

      }).catch((error)=> {
        toast.error(error.message);

      })


    }
    

    
    return(
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">e<span className="shope">Shope</span>.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span ><i  ><FaBars/></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
      <HeadingLogOut>
      <a ><FaUserCircle size={16} style={{clor: "#ff7722"}}/> Hi, {displayName}</a>
      </HeadingLogOut>
        <li class="nav-item">
          <Link to="/" class="nav-link  " aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact" class="nav-link " href="#" >Contact us</Link>
        </li>
        <li class="nav-item">
          <Link to="/cart" class="nav-link " href="#" > Card <FaShoppingCart size={20}  /></Link>
        </li>
        
        <HeadingLogin>
            <li class="nav-item"><Link to ="/login" class="nav-link" href="#">Login</Link></li>
            </HeadingLogin>
            <li class="nav-item"><Link to="/register" class="nav-link" href="#">Register</Link></li>
            <HeadingLogOut>
            <li class="nav-item"><Link to="/" class="nav-link" onClick={singout}>Logout</Link></li>
            </HeadingLogOut>

        <HeadingLogOut>
            <li class="nav-item"><Link to="/order-hidtory" class="nav-link" href="#">My Orders</Link></li>
            </HeadingLogOut>
     
      </ul>
     
    </div>
  </div>
</nav>
    )
}
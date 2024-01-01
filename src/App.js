import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, Contact, Login, Register, Reset} from "./pages/index";
import {Footer, Header} from "./components/index"  ;
import {ToastContainer} from 'react-toastify';
import {ShopContextProvider} from "./components/context/ShopeContext"
import 'react-toastify/dist/ReactToastify.css';
import { Cart} from './pages/cart/Cart';
     

function App() {
  return (
    <div>
      <ShopContextProvider>
    <BrowserRouter>
    <ToastContainer/>

    <Header/>
    <Routes>
      <Route path='/'     element={<Home/>}   />
      <Route path='/contact'     element={<Contact/>}   />
      <Route path='/login'     element={<Login/>}   />
      <Route path='/register'     element={<Register/>}   />
      <Route path='/reset'     element={<Reset/>}   />
      <Route path='/cart'     element={<Cart/>}   />

    </Routes>
    <Footer/>

    </BrowserRouter>
    </ShopContextProvider>
     
    </div>
  );
}

export default App;

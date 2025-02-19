import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import footer_logo from '../assets/bagge-removebg-preview.png'
import Wishi from '../assets/wish.png'
import './Navbar.css'
import Carty from '../assets/carty.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Navbar() {
  const navigate = useNavigate()


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setuserData] = useState({});
  const [isSeller, setSeller] = useState(false);
  const [isBuyer, setBuyer] = useState(false);
  const [menu,setMenu]=useState("")




  useEffect(() => {
    const token = localStorage.getItem("token");
   
    if (token) {
      setIsLoggedIn(true);

      const response = {
        data: {
          user: {
            type: 'seller'
          }
        }
      };
      
      setuserData(response.data.user);
      // const userType = response.data.user.type;
      // if (userType === "seller") {
      //   setSeller(true);
      // } else if (userType === "buyer") {
      //   setBuyer(true);
      // }
    } else {
      setIsLoggedIn(false);
      
    }

  },
   []);


  //  const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   let cnf = window.confirm("Are you sure you want to log out !");
  //   if (cnf) {
  //     toast.success("Logout successful!");
  //     navigate("/");
  //   }
  // };


  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info(
      <div>
        <p>Are you sure you want to log out?</p>
        <button className='logout-btn ' onClick={confirmLogout}>Yes</button>
        <button className='cancel-btn' onClick={cancelLogout}>No</button>
      </div>
    );
  };

  const confirmLogout = () => {
    toast.dismiss(); // Close the toast message
    toast.success("Logout successful!");
    navigate("/");
  };

  const cancelLogout = () => {
    toast.dismiss(); // Close the toast message
  };




  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">
        <img src={footer_logo} alt="Logo" className="navbar-logo" />SECOND CHANCE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/" >HOME </Link>
            </li>

            <li className="nav-item active">
              <Link className='nav-link' to="/mens">MENS</Link>

             
            </li>

            <li className="nav-item active ">
              <Link className='nav-link' to="/womens">WOMENS</Link>
              
            </li>

            <li className="nav-item active">

                <Link className="nav-link" to="/kids">KIDS</Link>
           
            </li>

        
              
                <li className="nav-item dropdown " >
                  <a
                    className="nav-link dropdown-toggle active"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="navbarDropdown"
                    data-toggle="dropdown"
                  >
                    Sell items
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/newProduct">
                      Add Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/myProduct"
                      >
                        My products
                      </Link>
                    </li>
                  </ul>
                  
                </li>
           
            {isLoggedIn ? (
            //   <li
            //     className="nav-item logout"
            //     style={{ position: "relative", right: "0px" }}
            //   >

            //     <button className="btn btn-danger p-1" onClick={() => {
            //       localStorage.removeItem("token")
            //       let cnf = confirm("Are you sure you want to log out !")
            //       if (cnf) {
            //         return navigate("/")
            //       }
            //     }}>logout</button>


            //   </li>
            // ) 
            
            
              <li className="nav-item logout" style={{ position: "relative", right: "0px" }}>
                <button className="btn btn-danger p-1" onClick={handleLogout}>logout</button>
              </li>
            )
            
            : (
              <li className="nav-item dropdown">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn join dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    id="dropdownMenuButton"
                  >
                    Join
                  </button>
                  <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton">
                    <li>
                      <Link className="dropdown-item" to="/login">
                        LogIn
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/register">
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}


          </ul>
   

   <li className="nav-item dropdown">
    <div className="btn-group">

     <div className="navbar-right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/wishlist">
                  <img src={Wishi} alt="" className="navbar-wishi-icon" />
                 
                </Link>
              </li>
            </ul>
          </div>
    

<ul className="navbar-nav">
  <li className="nav-item">
    <Link
      className="nav-link"
      to="/cart"
    >
      <img src={Carty} alt="Cart" className="navbar-cart-iconi" />
    </Link>
  </li>
</ul>





                    </div> 
   </li> 
            

   
          <form className="form-inline my-2 my-lg-0">

       
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          
        </div>
      </nav>


    </>
  )
}

export default Navbar
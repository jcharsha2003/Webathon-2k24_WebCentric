

import React, { useContext } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { loginContext } from "../context/loginContext";
import { FaWheelchair, FaHome, FaSignInAlt, FaSignOutAlt, FaUser, FaFileAlt, FaBookReader, FaVolumeUp, FaUsers } from 'react-icons/fa';
import { IoIosFitness } from "react-icons/io";
import { Link } from "react-router-dom";

import { FaBowlFood } from "react-icons/fa6";
import { RiUserSearchFill } from "react-icons/ri";


import "./NavbarMain.css"

import Logo from '../assets/images/logo3.png';

const NavbarMain = () => {

    
  let [currentUser, error, userLoginStatus, loginUser, logoutUser, role] = useContext(loginContext);
      
     return(
     <Navbar expand="lg" className="p-0 body">
     <div className="container-fluid px-3 body1">
       
       <div className="flex">
       <Link to="/">
     <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
   </Link>
       </div>
       <Navbar.Toggle aria-controls="basic-navbar-nav "  className="text-white"/>
       <Navbar.Collapse id="basic-navbar-nav"  className="text-white">
         <Nav className="ms-auto  ">
          
           <ul className="navbar-nav menu ms-auto text-decoration-none">
             {!userLoginStatus && 
               <ul className="navbar-nav menu ms-auto text-decoration-none">
                
                 <li className="nav-item active ">
                   <Link
                     className="nav-link text-white text-dark "
                     style={{ padding: "1.3rem" }}
                     to="/"
                   ><FaHome className="mx-2" /> 
                     Home
                   </Link>

                 </li>
                 <li className="nav-item active">
                   <a
                     className="nav-link text-white  "
                     style={{ padding: "1.3rem" }}
                     href="#exercises"
                   ><IoIosFitness className="mx-2 fs-5 " /> 
                    Exercises
                   </a>

                 </li>
                 
                 <li className="nav-item dropdown">
                   <Link
                     className="nav-link text-white   "
                     style={{ padding: "1.3rem" }}
                     to="/login"
                   ><FaSignInAlt className="mx-2" /> 
                     Sign in
                   </Link>
                 </li>
                 <li className="nav-item dropdown">
                   <Link
                     className="nav-link text-white "
                     style={{ padding: "1.3rem" }}
                     to="/register"
                   ><FaSignOutAlt className="mx-2" /> 
                     Sign up
                   </Link>
                 </li>
               </ul>
}
             
                           {userLoginStatus && role == "employee" && 
               <ul className="navbar-nav menu ms-auto text-decoration-none">
                 
                 <li className="nav-item active">
                   <Link
                     className="nav-link text-white  "
                     style={{ padding: "1.3rem" }}
                     to="/"
                   ><FaHome className="mx-2" /> 
                     Home
                   </Link>
                 </li>

                 <li className="nav-item active">
                   <a
                     className="nav-link text-white  "
                     style={{ padding: "1.3rem" }}
                     href="#exercises"
                   ><IoIosFitness className="mx-2 fs-5 " /> 
                    Exercises
                   </a>

                 </li>
                 <li className="nav-item dropdown">
                   <Link
                     className="nav-link text-white "
                     style={{ padding: "1.3rem" }}
                     to="/user-profile"
                   ><RiUserSearchFill className="mx-2"  />
                     User Profile
                   </Link>
                 </li>
                 <li className="nav-item dropdown">
                   <Link
                     className="nav-link text-white "
                     style={{ padding: "1.3rem" }}
                     to="/food"
                   ><FaBowlFood className="mx-2"  />
                     Food
                   </Link>
                 </li>
                 <li className="nav-item dropdown">
                   <Link
                     className="nav-link text-white "
                     style={{ padding: "1.3rem" }}
                     to="/tracker"
                   ><FaBowlFood className="mx-2"  />
                     Tracker
                   </Link>
                 </li>
                 <li className="nav-item dropdown">
                   <Link
                     className="nav-link text-white "
                     style={{ padding: "1.3rem" }}
                     to="/login"
                     onClick={logoutUser}
                   ><FaSignOutAlt className="mx-2"  />
                     Sign Out
                   </Link>
                 </li>
                 
               </ul>
             }
             
             <li className="nav-item active">
             <div id="google_translate_element"></div>

{/* Include Google Translate script */}
{/* <GoogleTranslate /> */}
             </li>
           </ul>
         </Nav>
       </Navbar.Collapse>
     </div>
   </Navbar>
  
   ) ;
      
 
            };

export default NavbarMain;

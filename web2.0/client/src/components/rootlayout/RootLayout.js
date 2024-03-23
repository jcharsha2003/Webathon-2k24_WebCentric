import React from "react";
import { useState,useEffect } from "react";
import Navbar from '../Navbar';
import Footer from '../Footer';
import "./RootLayout.css";
import { Outlet,useLocation } from "react-router-dom";


function RootLayout() {
  
    let location = useLocation();
    let [path, setPath] = useState("none");
    useEffect(() => {
      let url = location.pathname.replace("/", "");
          // Split the path by '/'
      let pathArray = url.split('/');
  
      // Get the last element of the array
      let lastPart = pathArray[pathArray.length - 1];
  
      console.log(lastPart); // This will output 'public'
    
      if (lastPart.length === 0) {
        setPath("home");
      } else {
        setPath(lastPart);
      }
    }, [location]);

  return (
    <div
      className={path}
    >
      <div className="head">
      <Navbar />
      </div>
      

      {/* placeholder */}
      <div className="main">
        <Outlet />
      </div>
      
      {/* <div className="sticky-footer">
          <Footer />
        </div> */}
      
    </div>
  );
}

export default RootLayout;
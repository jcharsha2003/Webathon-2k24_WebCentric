import React ,{useState}from "react";
import Register from "./components/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/rootlayout/RootLayout";
import ErrorPage from "./components/errorpage/ErrorPage";
import { Box } from '@mui/material';
import { createContext } from "react";
export const RecoveryContext = createContext();
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Login from "./components/login/Login";
import Reset from "./components/reset/Reset";
import OTPInput from "./components/otpInput/OTPInput";
import EmpProfile from "./components/empprofile/EmpProfile";
import Food from "./components/food/Food";
import Tracker from "./components/tracker/Tracker"
const App = () => {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },{
          path: "/otp",
          element: <OTPInput/>,
        },
        {
          path: "/reset",
          element: <Reset/>,
        },
        {
          path: "/food",
          element: <Food/>,
        },
        {
          path: "/tracker",
          element: <Tracker/>,
        },
        {
          path: "/exercise/:id",
          element: <ExerciseDetail />,
        },{
          path:"/user-profile",
          element:<EmpProfile/>
        }


       


      ],
    },
  ]);
  return (
   
      <RecoveryContext.Provider
      value={{ page, setPage, otp, setOTP, setEmail, email }}
    >   <RouterProvider router={routerObj} />

    </RecoveryContext.Provider>

    
    
  

  );
};
 


export default App;

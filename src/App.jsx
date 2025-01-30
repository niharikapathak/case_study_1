// import { useState } from 'react'

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase/firebaseFile";
import './App.css'
import Navbar from './Navbar'
import { useDispatch, useSelector } from "react-redux";
import { setUser, logoutUser } from "./redux/slices/userSlice";

import {  Route, Routes,  Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from "./components/DashBoard";


function App() {


  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(setUser(result.user)); // Store user in Redux
    } catch (error) {
      console.error(error.message);
    }
  };

  // const handleLogout = () => {
  //   signOut(auth);
  //   dispatch(logoutUser()); // Clear user from Redux
  // };



  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  console.log(user);
  return (
    <>


<Routes>
     
      <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />

    
      <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />

     
      <Route path="/" element={<Navigate to={user ? '/app' : '/login'} />} />
    </Routes>

</>
)
  
}

export default App

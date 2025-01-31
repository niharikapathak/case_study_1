import { useDispatch, useSelector } from 'react-redux';
import { auth, signInWithPopup, provider, onAuthStateChanged, signOut } from './firebase/firebaseFile';  // Adjust the import based on your firebase.js location
import { setUser, logoutUser } from './redux/slices/userSlice';
import { useEffect, useState } from 'react';
import "./assets/NavbarCssfile.css"

const Navbar = () => {


    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);


    
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // Add 'dark' class to <html>
    
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Save preference in localStorage
  }, [theme]);


  return (<>
 <div className="w-[100vw] h-[10vh] bg-white text-black flex justify-between items-center border-b border-gray-300  shadow
 "
 >

<div className="px-[20px] font-bold tracking-[5px] dark:text-white">FUNDSROOMS</div>

<div className="w-[22%] flex h-full">
  <div className="w-[30%] flex-1 flex justify-center items-center">
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition flex-1"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  </div>
</div>
</div>


  
  
  
  </>)
};

export default Navbar;

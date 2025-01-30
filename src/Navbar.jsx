import { useDispatch, useSelector } from 'react-redux';
import { auth, signInWithPopup, provider, onAuthStateChanged, signOut } from './firebase/firebaseFile';  // Adjust the import based on your firebase.js location
import { setUser, logoutUser } from './redux/slices/userSlice';

const Navbar = () => {


    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

  return (<>

<div className="w-[100vw] h-[10vh] bg-[#ffffff] flex justify-between items-center border-b-1 border-[#e2e2e2]">
<div className='px-[20px] font-bold tracking-[5px]'>
    FUNDSROOMS
</div>

<div>
  {
    user? <div className={` Niharika bg-[url(${user.photoURL})]`}>
       
    </div>:<></>
  }
</div>
  </div>


  
  
  
  </>)
};

export default Navbar;

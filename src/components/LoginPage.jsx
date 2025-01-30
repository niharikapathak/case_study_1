// SignInPage.js

import { auth, provider } from '../firebase/firebaseFile';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(setUser(user)); // Store user in Redux
      console.log("User signed in: ", user);

      navigate("/dashboard"); // Redirect to dashboard or home page
      
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <>
    <div>
        <Navbar/>
        <div className='h-[90vh] w-[100vw] flex items-center justify-center flex-col'>
            <p className='text-base mb-6  tracking-[2px] text-[16px] font-[400] '>
                You have not Sign in yet. Please Sign in to continue.
            </p>

            <button onClick={handleGoogleSignIn}
             className='flex justify-center items-center gap-2  border-1 rounded-[30px] px-[44px] py-[8px]  mt-[10px] '
            // className=""
            >
                Signin <img src="/googleimg.jpg" alt="" className='w-[3vw]' />
            </button>

        </div>

    </div>
    </>
);
};

export default SignInPage;

// <div className="min-h-screen flex items-center justify-center bg-gray-100">
//   <div className="max-w-sm w-full bg-white p-8 rounded-xl shadow-lg">
//     <h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>
//     <button
//       onClick={handleGoogleSignIn}
//       className="w-full py-2 px-4 bg-blue-600 text-white rounded-md flex items-center justify-center gap-2"
//     >
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
//         alt="Google Logo"
//         className="w-6 h-6"
//       />
//       Sign in with Google
//     </button>
//   </div>
// </div>
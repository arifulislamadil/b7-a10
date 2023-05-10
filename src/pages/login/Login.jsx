import React, { useContext, useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation , useNavigate, useParams} from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../authProvider/AuthProvider";


const Login = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [photo, setPhoto] = useState(null); 
  const [password, setPassword] = useState(null); 
  const {logInUser} = useContext(AuthContext);

  const [getAuthToken, setAuthToken] = useState();
  const location = useLocation();
  useEffect(()=>{
    setAuthToken(location?.state?.from?.pathname)
  },[])

  const navigator = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(email, password) {
      logInUser(email,password)
      .then((res) => {
          
          if(getAuthToken) {
            navigator(`${getAuthToken}`);
          }else{
            navigator("/")
          }
        })
        .catch(error=>{
          console.log(error);
        })
    }
  }

  const auth = getAuth(app);
  // handle github login
  const githubProvider = new GithubAuthProvider();
const handleGithubLogin=()=>{
  signInWithPopup(auth, githubProvider)
  .then((result) => {
    console.log(result);
    
      if(getAuthToken) {
        navigator(`${getAuthToken}`);
      }else{
        navigator("/")
      }
  })
  .catch((error)=>{
    console.log(error);
  })
}






  // Handle Google Sign In
  
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const displayName = result.user.auth.currentUser.displayName;
        const displayEmail = result.user.auth.currentUser.email;
        const displayPhoto = result.user.auth.currentUser.photoURL;
        setName(displayName);
        setEmail(displayEmail);
        setPhoto(displayPhoto);


        if(getAuthToken) {
          navigator(`${getAuthToken}`);
        }else{
          navigator("/")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:w-2/5 mx-auto bg-gray-500 my-20 text-center rounded-2xl p-10">
      <h3 className="text-3xl font-bold mb-3 text-gray-100">
        Login Your Account
      </h3>
      <input
      onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Your Email"
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your Password"
        className="input input-bordered input-primary w-full max-w-xs mt-3"
      />
      <div className="mt-3">
        <Link onClick={handleLogin} className="btn btn-secondary mb-5 " to="">
          Login
        </Link>
      </div>

      <div className="flex justify-center mt-2 pb-3 ">
        <h3 className="text-2xl mr-5">
          <button onClick={handleGoogleLogin}>
            <FaGoogle />
          </button>
        </h3>

        <h3 className="text-2xl">
        <h3 className="text-2xl mr-5">
          
        </h3>
        <button onClick={handleGithubLogin}>
        <FaGithub />
          </button>
        </h3>
      </div>
      <div>
        <span>Don't have account then </span>
        <Link className="" to="/register">
          <button className="text-red-600">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

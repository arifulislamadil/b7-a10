import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
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

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const displayName = result.user.auth.currentUser.displayName;
        const displayEmail = result.user.auth.currentUser.email;
        const displayPhoto = result.user.auth.currentUser.photoURL;
        setName(displayName);
        setEmail(displayEmail);
        setPhoto(displayPhoto);
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
        type="text"
        placeholder="Your Email"
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Your Password"
        className="input input-bordered input-primary w-full max-w-xs mt-3"
      />
      <div className="mt-3">
        <Link className="btn btn-secondary mb-5 " to="">
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
          <FaGithub />
        </h3>
      </div>
      <div>
        <span>Don't have account then </span>
        <Link className="b" to="/register">
          <button className="text-red-600">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

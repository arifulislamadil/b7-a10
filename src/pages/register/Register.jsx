import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  
  const navigator = useNavigate()
  const handleRegistration = (e) => {
    e.preventDefault();
   
   
    if ((user, email, password)) {
      if(user.trim() === "" || photo.trim() === "" ) {
        return ;
      }
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        setError("password invalid need 8 characters at least one uppercase,lowercase,number and a special character Example : MyPassword123$");
      return;
       
      }
      registerUser(email, password)
        .then((result) => {
          
          if(result.user) {
            navigator("/");
          }

        })
        .then((error) => {
        setError(error);
        console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="md:w-2/5 mx-auto bg-gray-500 my-20 text-center rounded-2xl p-10">
        <h3 className="text-3xl font-bold mb-3 text-gray-100">
          Register Your Account
        </h3>

        
        <form action="">
          <input
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="Your Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Your Email"
            className="input input-bordered input-primary w-full max-w-xs mt-3"
          />
          <input
            onChange={(e) => setPhoto(e.target.value)}
            type="file"
            placeholder="Your PhotoURL"
            className="input input-bordered input-primary w-full max-w-xs mt-3"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Your Password"
            className="input input-bordered input-primary w-full max-w-xs mt-3"
          />
         <p className="text-red-600">{error}</p>
          <div className="flex text-center mx-auto w-full max-w-xs mt-3">
            <input type="checkbox" className="mr-3" />
            <span>Accept form & conditions</span>
          </div>
          <div className="mt-3">
            <Link to="">
              <button
                onClick={handleRegistration}
                className="btn btn-secondary mb-5 "
              >
                Register
              </button>
            </Link>
          </div>
        </form>

        <div className="mt-3">
          <p>Have Register Already</p>
          <Link className="text-red-600" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

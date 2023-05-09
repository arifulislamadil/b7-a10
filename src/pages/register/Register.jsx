import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="w-2/5 mx-auto bg-gray-500 my-20 text-center rounded-2xl p-10">
        <h3 className="text-3xl font-bold mb-3 text-gray-100">Register Your Account</h3>

        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Your Email"
          className="input input-bordered input-primary w-full max-w-xs mt-3"
        />
        <input
          type="text"
          placeholder="Your PhotoURL"
          className="input input-bordered input-primary w-full max-w-xs mt-3"
        />
        <input
          type="text"
          placeholder="Your Password"
          className="input input-bordered input-primary w-full max-w-xs mt-3"
        />
        <div className="flex text-center mx-auto w-full max-w-xs mt-3">
          <input
            type="checkbox"
            className="mr-3"
          />
          <span>Accept form & conditions</span>
        </div>
        <div className="mt-3">
        <Link className="btn btn-secondary mb-5 " to="">
          Register
        </Link>
      </div>

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

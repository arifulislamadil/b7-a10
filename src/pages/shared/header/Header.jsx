import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

  
    const [profile,setProfile] = useState(false);
    const handleProfileClick = () => {
        setProfile(!profile);
    }
  return (
    <div className="container mx-auto px-4">
      <div className="container navbar mx-auto px-4 bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img style={{width:"50px",height:"50px" ,marginRight:"5px"}} src="https://cdn.iconscout.com/icon/free/png-256/free-master-chef-3442460-2875721.png" alt="" />
            MasterChefs</a>
        </div>
        <div className="hidden md:inline">
            <ul>
                <li>
                    <Link className="btn btn-ghost normal-case text-xl bg-slate-300 mr-2" to="/">Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl bg-slate-300 mr-2" to="/">About</Link>
                    <Link className="btn btn-ghost normal-case text-xl bg-slate-300 mr-2" to="/chefs">Chefs</Link>
                    <Link className="btn btn-ghost normal-case text-xl bg-slate-300 mr-2" to="/blogs">Blogs</Link>
                    <Link className="btn btn-ghost normal-case text-xl bg-slate-300 mr-2" to="/">Contact</Link>
                </li>
            </ul>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 inline sm:hidden card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body ">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>              
            </label>
            
            <ul onClick={handleProfileClick}
            
              tabIndex={0}
              className="inline sm:hidden menu menu-compact dropdown-content mt-5 p-2 shadow bg-white-400 rounded-box w-52"
            >
                
                <li>
                    <Link  onClick={!profile} className="btn btn-ghost normal-case text-xl  " to="/">Home</Link>
                    <Link onClick={!profile}  className="btn btn-ghost normal-case text-xl " to="/">About</Link>
                    <Link onClick={!profile}  className="btn btn-ghost normal-case text-xl  " to="/">Chefs</Link>
                    <Link onClick={!profile}  className="btn btn-ghost normal-case text-xl  " to="/">Blogs</Link>
                    <Link onClick={!profile}  className="btn btn-ghost normal-case text-xl  " to="/">Contact</Link>
                    <Link onClick={!profile}  className="btn btn-ghost bg-red-500 normal-case text-xl  " to="/">Logout</Link>
                    </li>

            </ul>
          </div>
          <Link className="btn btn-secondary " to="/login">login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

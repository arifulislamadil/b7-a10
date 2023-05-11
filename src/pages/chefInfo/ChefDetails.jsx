import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaGithub, FaHeart, FaStar } from "react-icons/fa";
const ChefDetails = () => {
  const chef = useLoaderData();
  console.log(chef);

  return (
    <div className="">
      <div className=" md:flex">
        <figure className=" md:pt-20">
          <img src={chef.picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title">{chef.name}</h2>
          <p className="w-10/12">Description : {chef.description}</p>
          <p className="">Number Of Recipes : {chef.recipes.length}</p>
          <p className="">Number Of Likes: {chef.description.length}</p>
          <h3 className="text-2xl">Recipes List</h3>
          <table className="w-4/5 my-5" >
            <thead className="border-solid border-2 py-5 px-5 border-sky-500">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>cuisine Type</th>
                <th>ingredients</th>
              </tr>
            </thead>
            <tbody className="border-solid border-2 py-5 border-sky-500">
              <tr className="border-solid border-2 border-green-500">
                <td>1</td>
                <td>{chef.recipes[0]}</td>
                <td>Western</td>
                <div>
                  <td>{chef.ingredients}</td>
                  <td className="flex">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </td>
                </div>
                <td>
                  <button className="btn btn-primary">
                    <span>
                      <FaHeart></FaHeart>
                    </span>{" "}
                    <span>Favorite</span>
                  </button>
                </td>
              </tr>
              <tr className="border-solid border-2 border-green-500">
                <td>2</td>
                <td>{chef.recipes[1]}</td>
                <td>Western</td>
                <div>
                  <td>{chef.ingredients}</td>
                  <td className="flex">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </td>
                </div>
                <td>
                  <button className="btn btn-primary">
                    <span>
                      <FaHeart></FaHeart>
                    </span>{" "}
                    <span>Favorite</span>
                  </button>
                </td>
                
              </tr>
              <tr className="border-solid border-2 border-green-500">
                <td>3</td>
                <td>{chef.recipes[2]}</td>
                <td>Western</td>
                <div>
                  <td>{chef.ingredients}</td>
                  <td className="flex">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </td>
                </div>
                <td>
                  <button className="btn btn-primary">
                    <span>
                      <FaHeart></FaHeart>
                    </span>{" "}
                    <span>Favorite</span>
                  </button>
                </td>

              </tr>
            </tbody>
          </table>
          <div className="card-actions ">
            <Link to="/">
              <button className="btn btn-primary text-center px-20 py-5">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;

import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-500 rounded-2xl">
      <div className="py-10 my-5">
        <div className="hero-content flex-col lg:flex-row">
          <img
         
            src="https://heychef.ae/wp-content/uploads/2020/05/hero-image-1536x1084.png"
            className="max-w-2xl rounded-lg shadow-2xl w-3/4"
          />
          <div className="md:mr-10">
            <h1 className="text-2xl font-bold">YOUR ON-DEMAND PERSONAL CHEF SERVICE IN USA!</h1>
            <p className="py-6 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

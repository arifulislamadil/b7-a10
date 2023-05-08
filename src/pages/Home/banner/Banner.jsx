import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="py-10 my-5">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

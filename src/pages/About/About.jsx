import { Container } from 'postcss';
import React from 'react';



function About() {
  return (
    <div className="my-20">
      <div className="bg-gray-50">
        <div className='md:flex w-full'>
        <div className='md:w-6/12'>
            <img src="https://www.altishotels.com/Images/GetImageDB.aspx?imgid=37&srchid=31" alt="" />
        </div>
        <div className='md:w-6/12 p-10'>
          <h1 className="text-4xl font-bold mb-4 mt-5">About Master Chefs</h1>
          <p className="text-gray-700 leading-loose">
            Master Chefs is a website dedicated to celebrating the world's greatest chefs and their delicious creations. Our mission is to inspire and educate food enthusiasts of all levels, from home cooks to professional chefs.
          </p>
          <p className="text-gray-700 leading-loose mt-4">
            Our team of experts includes world-renowned chefs, food writers, and culinary educators who are passionate about sharing their knowledge and experience with our readers. Whether you're looking for inspiration for your next meal or want to learn new cooking techniques, you'll find everything you need on Master Chefs.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;

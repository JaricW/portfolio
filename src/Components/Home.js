import React from "react";
import Almscliffe from "../Images/Almscliffe.jpg";

const Home = (props) => {
  return (
    <main className="w-full h-screen flex">
      <div className="flex flex-col sm:justify-center items-center mt-36 sm:mt-0 w-full sm:w-6/12 text-left z-20 text-gray-100 animate-fadeIn">
        <h1 className="text-3xl p-2 ">Hi, I'm Jaric</h1>
        <h2 className="text-2xl p-2">Welcome to my website</h2>

        <button
          onClick={props.goProjects}
          className="cursor-pointer text-yellow-700 bg-gray-900 bg-opacity-0 hover:bg-opacity-50 border-2 border-current border-solid rounded-md m-1 h-12 w-60 p-2"
        >
          <h3>Projects</h3>
        </button>
        <div className="absolute bottom-6 flex gap-x-8">
          <a href="https://github.com/JaricW" target="_blank"><i class="fab fa-github text-2xl"></i></a>
          <a href="https://www.linkedin.com/in/jaric-woodhead/" target="_blank"><i class="fab fa-linkedin-in text-2xl"></i></a>
        </div>
      </div>

      <img
        src={Almscliffe}
        className="z-0 absolute object-cover sm:right-0 sm:w-6/12 h-screen w-full animate-fadeIn"
        alt="Myself bouldering at Almscliffe"
      />
      <div className="z-10 absolute w-full h-screen bg-black bg-opacity-70 sm:bg-gradient-to-r from-black via-black to-transparent sm:bg-opacity-20" />
    </main>
  );
};

export default Home;

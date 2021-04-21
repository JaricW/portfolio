import React from "react";
import Almscliffe from "../Images/Almscliffe.jpg";

const Home = () => {
  return (
    <main className="w-full h-screen flex ">
      <div className="flex flex-col md:justify-center items-center mt-36 md:mt-0 w-full md:w-6/12 text-left z-20 text-white animate-fadeIn">
        <h1 className="text-3xl ">Hi, I'm Jaric</h1>
        <h2 className="text-2xl">Welcome to my website</h2>

        <button className="border-solid border-white rounded-md bg-gray-800 hover:bg-gray-600 h-12 w-60">
          Projects
        </button>
      </div>

      <img
        src={Almscliffe}
        className="z-0 absolute object-cover md:right-0 md:w-6/12 h-screen"
        alt="Myself bouldering at Almscliffe"
      />
      <div className="z-10 absolute w-full h-screen bg-black bg-opacity-80 md:bg-gradient-to-r from-black via-black to-transparent md:bg-opacity-20" />
    </main>
  );
};

export default Home;

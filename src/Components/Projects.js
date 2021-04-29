import React from "react";
import PCImg from "../Images/PlantCentralImg.PNG";
import TBImg from "../Images/TheBoulderImg.PNG";
import WFDImg from "../Images/WhatsForDinnerImg.PNG";

const Projects = () => {
  return (
    <div className="min-h-screen bg-black ">
      <header className="pt-20 flex justify-center mb-6 md:mb-16">
        <h2 className="text-yellow-700 text-3xl">Projects</h2>
      </header>
      <main className="flex-wrap flex gap-8 justify-center items-center animate-fadeIn">
        <div className="flex justify-center items-center m-5 ">
          <container className="h-64 w-80 md:w-96 absolute bg-white flex justify-center items-center mx-5 rounded-3xl overflow-hidden">
            <img
              className="w-80 md:w-96"
              src={TBImg}
              alt="The Boulder Website"
            />
          </container>
          <div className="bg-gray-100 flex justify-between items-center flex-col w-80 md:w-96 h-64 rounded-3xl p-8 cursor-default z-10  transition duration-500 ease-in opacity-0 hover:opacity-100">
            <h1 className="text-yellow-700 text-xl">The Boulder</h1>
            <p className="text-center italic">
              Register online and find out more about Sheffields newest Climbing
              Centre
            </p>
            <div className="flex gap-4">
              <button className="cursor-pointer text-yellow-700 bg-gray-900 bg-opacity-0 hover:bg-opacity-10 border-2 border-current border-solid rounded-md p-2">
                <a href="https://the-boulder.netlify.app/" target="_blank">
                  View
                </a>
              </button>
              <button className="cursor-pointer text-yellow-700 bg-gray-900 bg-opacity-0 hover:bg-opacity-10 border-2 border-current border-solid rounded-md p-2">
                <a href="https://github.com/JaricW/The-Boulder" target="_blank">
                  Code
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center m-5">
          <container className="h-64 w-80 md:w-96 absolute bg-white flex justify-center items-center mx-5 rounded-3xl overflow-hidden">
            <img
              className="w-80 md:w-96"
              src={PCImg}
              alt="Plant Central Website"
            />
          </container>
          <div className="bg-gray-100 flex justify-between items-center flex-col w-80 md:w-96 h-64 rounded-3xl p-8 cursor-default z-10  transition duration-500 ease-in opacity-0 hover:opacity-100">
            <h1 className="text-yellow-700 text-xl">Plant Central</h1>
            <p className="text-center italic">
              Search for and buy plants online
            </p>
            <div className="flex gap-4">
              <button className="cursor-pointer text-yellow-700 bg-gray-900 bg-opacity-0 hover:bg-opacity-10 border-2 border-current border-solid rounded-md p-2">
                <a href="https://plant-central.netlify.app/" target="_blank">
                  View
                </a>
              </button>
              <button className="cursor-pointer text-yellow-700 bg-gray-900 bg-opacity-0 hover:bg-opacity-10 border-2 border-current border-solid rounded-md p-2">
              <a href="https://github.com/JaricW/Plant-Central" target="_blank">
                  Code
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center m-5">
          <container className="h-64 w-80 md:w-96 absolute bg-white flex justify-center items-center mx-5 rounded-3xl overflow-hidden">
            <img
              className="w-80 md:w-96"
              src={WFDImg}
              alt="What's for Dinner Website"
            />
          </container>
          <div className="bg-gray-100 flex justify-between items-center flex-col w-80 md:w-96 h-64 rounded-3xl p-8 cursor-default z-10  transition duration-500 ease-in opacity-0 hover:opacity-100">
            <h1 className="text-yellow-700 text-xl">What's For Dinner</h1>

            <p className="text-center italic">
              This website will help you plan your meals and come up with new
              ideas for what to eat
            </p>
            <div className="flex gap-4">
              <button className="cursor-pointer text-yellow-700 bg-gray-900 bg-opacity-0 hover:bg-opacity-10 border-2 border-current border-solid rounded-md p-2">
                <a href="https://dinnerpicker.netlify.app/" target="_blank">
                  View
                </a>
              </button>
              <button className="cursor-pointer text-yellow-700 bg-gray-900 bg-opacity-0 hover:bg-opacity-10 border-2 border-current border-solid rounded-md p-2">
              <a href="https://github.com/JaricW/whatsfordinner" target="_blank">
                  Code
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;

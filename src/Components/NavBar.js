import React from "react";

const NavBar = (props) => {
  return (
    <ul className="flex w-full absolute z-50 text-yellow-700 gap-12 mt-2 justify-center md:justify-start md:ml-8 md:w-96">
      <li className="cursor-pointer hover:text-yellow-700 border-2 border-transparent hover:border-current border-solid rounded-md p-3 m-1" onClick={props.goHome}>Home</li>
      <li className="cursor-pointer hover:text-yellow-700 border-2 border-transparent hover:border-current border-solid rounded-md p-3 m-1" onClick={props.goProjects}>Projects</li>
      <li className="cursor-pointer hover:text-yellow-700 border-2 border-transparent hover:border-current border-solid rounded-md p-3 m-1" onClick={props.goAbout}>About</li>
    </ul>
  );
};

export default NavBar;

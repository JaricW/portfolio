import React from "react";

const NavBar = () => {
    return(
        <ul style={{marginLeft: "5%", display: "flex", position: "absolute", zIndex: "3", color: "orange", listStyle: "none", gap: "50px", padding: "0"}}>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    );
};

export default NavBar;
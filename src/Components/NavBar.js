import React from "react";

const NavBar = (props) => {
    return(
        <ul style={{marginLeft: "5%", display: "flex", position: "absolute", zIndex: "60", color: "orange", listStyle: "none", gap: "50px", padding: "0"}}>
            <li onClick={props.goHome}>Home</li>
            <li onClick={props.goProjects}>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    );
};

export default NavBar;
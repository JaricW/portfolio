import React from "react";
import Almscliffe from "../Images/Almscliffe.jpg";

const Home = () => {
  return (
    <main style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div
        style={{
            height: "100vh",
            width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "10%",
          zIndex: "2",
          color: "white",
          textShadow: "3px 3px black",
        }}
      >
        <h1>Hi, I'm Jaric</h1>
        <h2>Welcome to my website</h2>

        <button style={{ height: "50px", width: "260px" }}>Projects</button>
      </div>

      <img
        src={Almscliffe}
        style={{
          zIndex: "0",
          position: "absolute",
          objectFit: "cover",
          marginLeft: "40%",
          width: "60%",
          height: "100vh",
          opacity: "1",
        }}
        alt="Myself bouldering at Almscliffe"
      />
      <div
        style={{
          zIndex: "1",
          position: "absolute",
          width: "100%",
          height: "100vh",
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(2,18,231,0.3) 92%)",
          opacity: "1",
        }}
      ></div>
    </main>
  );
};

export default Home;

import React from "react";
import PCImg from "../Images/PlantCentralImg.PNG";
import TBImg from "../Images/TheBoulderImg.PNG";
import WFDImg from "../Images/WhatsForDinnerImg.PNG";

const Projects = () => {
  return (
    <>
      <header
        style={{
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          background: "black",
        }}
      >
        <h2 style={{ color: "papayaWhip", margin: "0" }}>Projects</h2>
      </header>
      <main
      className="md:grid-cols-3"
        style={{
          width: "100%",
          minHeight: "90vh",
          display: "grid",
          background: "black",
          gridRowGap: "20px"
         
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "400px",
              width: "300px",
              background: "papayaWhip",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              borderRadius: "40px",
              padding: "10px",
            }}
          >
            <h1 style={{ margin: "0" }}>The Boulder</h1>
            <img style={{ width: "100%" }} src={TBImg} />
            <p style={{ textAlign: "center", fontStyle: "italic" }}>
              Register online and find out more about Sheffields newest Climbing
              Centre
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
            <button><a href="https://the-boulder.netlify.app/" target="_blank">View</a></button>
              <button>About</button>
              <button>Code</button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
                height: "400px",
                width: "300px",
                background: "papayaWhip",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: "40px",
                padding: "10px",
            }}
          >
            <h1 style={{ margin: "0" }}>Plant Central</h1>
            <img style={{ width: "100%" }} src={PCImg} />
            <p style={{ textAlign: "center", fontStyle: "italic" }}>
              Search for and buy plants online
            </p>
            <div style={{display: "flex", gap: "20px" }}>
            <button><a href="https://plant-central.netlify.app/" target="_blank">View</a></button>
              <button>About</button>
              <button>Code</button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
                height: "400px",
                width: "300px",
                background: "papayaWhip",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: "40px",
                padding: "10px",
            }}
          >
            <h1 style={{ margin: "0" }}>What's For Dinner</h1>
            <img style={{ width: "100%" }} src={WFDImg} />
            <p style={{textAlign: "center", fontStyle: "italic"}}>This website will help you plan your meals and come up with new ideas for what to eat</p>
            <div style={{ display: "flex", gap: "20px" }}>
            <button><a href="https://dinnerpicker.netlify.app/" target="_blank">View</a></button>
              <button>About</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;

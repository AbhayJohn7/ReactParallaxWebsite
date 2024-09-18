import React from "react";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from './Navbar'
import img1 from "./assets/lofy.jpg";
import gif2 from "./assets/mountain.gif";
import gif from "./assets/new4.gif";
import ImageSlider from "./ImageSlider";


function App() {
  return (
    <div>
 <Navbar/>
      <Parallax
        pages={3}
        style={{
          backgroundColor: "#b34d4d"
            
        }}
      >

        <ParallaxLayer
         
          offset={0}
          speed={0.5}
          factor={1}
          style={{
            backgroundImage: `url(${gif})`,
            backgroundSize: "cover",
           
          }}
          className="center"
        >
          <div>
            <h1 id="home" className="text-center font-weight-bold">WELCOME</h1>
          </div>
        </ParallaxLayer>

  
        <ParallaxLayer offset={2} speed={0.5} factor={1}
        style={{
          backgroundImage: `url(${gif2})`,
          backgroundSize: "cover"
         
        }}
        id="parallax-section"
        className="center"
        >
          <div
            
            className="text-center"
          >
            <p>THANK YOU</p>
          
          </div>
        </ParallaxLayer>
   
        <ParallaxLayer className="slider" offset={1} speed={0.2} factor={1}>
          <div id="slider">
            <ImageSlider />
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./App.css";

// Inline styles for slider text and container
const spanStyle = {
  padding: 0,
  color: "white",
  fontSize: "40px",
  textShadow: "2px 2px 1px #000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "1000px",
  
};

// Array of images and captions
const slideImages = [
  {
    url: "https://previews.123rf.com/images/vuzek/vuzek2306/vuzek230600289/206287505-lofi-forest-landscape-wallpaper-background-design-anime-manga-style-illustration-art-generated-by-ai.jpg",
    caption: "IMAGE 1",
  },
  {
    url: "https://wallpapercave.com/wp/wp7575083.jpg",
    caption: "IMAGE 2",
  },
  {
    url: "https://img.freepik.com/premium-photo/lofi-design-showcasing-beautiful-olympic-national-park-landscape_899449-79525.jpg",
    caption: "IMAGE 3",
  },
];

const ImageSlider = () => {
  return (
    <div className="image-slider">
      <Slide
        indicators={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={100} // Automatic sliding speed (2 seconds)
        cssEase="linear" // Transition easing function
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlider;

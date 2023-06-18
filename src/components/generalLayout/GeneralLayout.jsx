import { Fragment } from "react";
import Intro from "../Intro/Intro";
import Gallery from "../galery/Gallery";
import Contact from "../contact/Contact";
import background from "../../assets/backup-landing.jpg";
import blackImage from "../../assets/landing-image.jpg";

function GeneralLayout() {
  // the whiteBackground function changes the the theme of the webpage from black to white
  // it also gets access to a few affected elements and changes their color to fit in the new theme
  function whiteBackground() {
    // declaring variables
    const body = document.body;
    const landingImage = document.querySelector(".landing__view");
    const about = document.querySelector(".about");
    const aboutParagraph = document.querySelector(".about__paragraph");
    const input = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");

    // Changing the styles
    body.style.backgroundColor = "white"; // change to the desired background color
    body.style.color = "black"; // change to the desired background color
    landingImage.style.backgroundSize = "cover";
    about.style.marginTop = "0";
    about.style.color = "black";
    aboutParagraph.style.color = "black";
    input.forEach((inp) => (inp.style.color = "black"));
    textarea.style.color = "black";

    // Change background image
    landingImage.style.backgroundImage = `url(${background})`; // change to the path of the new background image
  }

  // the blackBackground function changes the the theme of the webpage from white to black
  // it also gets access to a few affected elements and changes their color to fit in the new theme
  function blackBackground() {
    // declaring variables
    const body = document.body;
    const landingImage = document.querySelector(".landing__view");
    const about = document.querySelector(".about");
    const aboutParagraph = document.querySelector(".about__paragraph");
    const input = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");

    // Changing the styles
    body.style.backgroundColor = "black";
    body.style.color = "white";
    aboutParagraph.style.color = "white";
    about.style.color = "white";
    input.forEach((inp) => (inp.style.color = "white"));
    textarea.style.color = "white";

    // Change background image
    landingImage.style.backgroundImage = `url(${blackImage})`; // change to the path of the new background image

    // adding a few changes to the media queries
    if (window.matchMedia("(max-width: 950px)").matches) {
      landingImage.style.backgroundSize = "contain";
    }
    if (window.matchMedia("(max-width: 950px)").matches) {
      about.style.marginTop = "-8rem";
    }
  }

  return (
    <Fragment>
      {/* pass both fucntions to the intro section */}
      <Intro onblack={blackBackground} onwhite={whiteBackground} />
      <Gallery />
      <Contact />
    </Fragment>
  );
}

export default GeneralLayout;

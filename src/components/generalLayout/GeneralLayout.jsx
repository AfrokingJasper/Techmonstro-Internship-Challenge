import { Fragment, useState } from "react";
import Intro from "../Intro/Intro";
import Gallery from "../galery/Gallery";
import Contact from "../contact/Contact";
import background from "../../assets/backup-landing.jpg";
import blackImage from "../../assets/landing-image.jpg";

function GeneralLayout() {
  const [back, setBack] = useState(true);

  function whiteBackground() {
    const body = document.body;
    const landingImage = document.querySelector(".landing__view");
    const about = document.querySelector(".about");
    const aboutParagraph = document.querySelector(".about__paragraph");
    const input = document.querySelectorAll("input");

    // Change background color
    body.style.backgroundColor = "white"; // change to the desired background color
    body.style.color = "black"; // change to the desired background color
    setBack(false);

    // Change background image

    landingImage.style.backgroundImage = `url(${background})`; // change to the path of the new background image
    landingImage.style.backgroundSize = "cover"; // change to the path of the new background image
    about.style.marginTop = "0";
    about.style.color = "black";
    aboutParagraph.style.color = "black";
    input.forEach((inp) => (inp.style.color = "black"));
  }
  function blackBackground() {
    const body = document.body;
    const landingImage = document.querySelector(".landing__view");
    const about = document.querySelector(".about");
    const aboutParagraph = document.querySelector(".about__paragraph");
    const input = document.querySelectorAll("input");

    // Change background color
    body.style.backgroundColor = "black"; // change to the desired background color
    body.style.color = "white"; // change to the desired background color
    aboutParagraph.style.color = "white";
    about.style.color = "white";
    input.forEach((inp) => (inp.style.color = "white"));

    setBack(!back);
    // Change background image

    landingImage.style.backgroundImage = `url(${blackImage})`; // change to the path of the new background image
    // change to the path of the new background image

    if (window.matchMedia("(max-width: 600px)").matches) {
      landingImage.style.backgroundSize = "contain";
    }
    if (window.matchMedia("(max-width: 950px)").matches) {
      about.style.marginTop = "-8rem";
    }
  }

  return (
    <Fragment>
      <Intro onblack={blackBackground} onwhite={whiteBackground} />
      <Gallery back={back} />
      <Contact back={back} />
    </Fragment>
  );
}

export default GeneralLayout;

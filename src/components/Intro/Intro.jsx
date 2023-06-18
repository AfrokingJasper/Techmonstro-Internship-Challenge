import { Fragment } from "react";
import LandingView from "./LandingView";
import About from "./About";

function Intro({ onblack, onwhite }) {
  return (
    <Fragment>
      {/* passing the black and white backgroudn changer to the landview element where it will be used */}
      <LandingView onblack={onblack} onwhite={onwhite} />
      <About />
    </Fragment>
  );
}

export default Intro;

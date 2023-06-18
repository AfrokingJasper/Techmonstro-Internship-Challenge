import { Fragment } from "react";
import LandingView from "./LandingView";
import About from "./About";

function Intro({onblack, onwhite }) {
  return (
    <Fragment>
      <LandingView onblack={onblack} onwhite={onwhite} />
      <About />
    </Fragment>
  );
}

export default Intro;

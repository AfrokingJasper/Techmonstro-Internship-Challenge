import { Fragment } from "react";
import LandingView from "../Intro/LandingView";
import About from "../Intro/About";

function GeneralLayout() {
  return (
    <Fragment>
      <LandingView />
      <About />
    </Fragment>
  );
}

export default GeneralLayout;

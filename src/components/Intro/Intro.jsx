import { Fragment } from "react";
import LandingView from "./LandingView";
import About from "./About";

// the onblack and onwhite props was gotten from the generallayout component
function Intro({ onblack, onwhite }) {
  return (
    <Fragment>
      {/* passing the black and white backgroud changer to the landview element where it will be used */}
      <LandingView onblack={onblack} onwhite={onwhite} />
      <About />
    </Fragment>
  );
}

export default Intro;

import { Fragment } from "react";
import Intro from "../Intro/Intro";
import Gallery from "../galery/Gallery";
import Contact from "../contact/Contact";

function GeneralLayout() {
  return (
    <Fragment>
      <Intro />
      <Gallery />
      <Contact />
    </Fragment>
  );
}

export default GeneralLayout;

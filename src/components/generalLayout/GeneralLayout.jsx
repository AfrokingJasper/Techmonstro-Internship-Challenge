import { Fragment } from "react";
import Intro from "../Intro/Intro";
import Gallery from "../galery/Gallery";

function GeneralLayout() {
  return (
    <Fragment>
      <Intro />
      <Gallery />
    </Fragment>
  );
}

export default GeneralLayout;

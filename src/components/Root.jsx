import { Fragment } from "react";
import Header from "./Intro/Header";
import { Outlet } from "react-router-dom";

// the root file serves as the parent page component
// it holds the header component which is meant to be visible across any page the user navigates to
// an also an outlet which represents the children components
function RootLayout() {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default RootLayout;

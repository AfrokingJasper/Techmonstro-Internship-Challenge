import { Fragment } from "react";
import Header from "./Intro/Header";
import { Outlet } from "react-router-dom";

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

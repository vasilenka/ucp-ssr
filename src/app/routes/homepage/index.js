import React from "react";
import Page from "../../components/Page/Page";

import logo from "./mid.png";
import Navbar from "../../layouts/Navbar/Navbar";

export default () => (
  <Page>
    <Navbar />
    <p>Here's our homepage. All are welcome.</p>
    <img src={logo} alt="Homepage" style={{ width: "400px" }} />
  </Page>
);

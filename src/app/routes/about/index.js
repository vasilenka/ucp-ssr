import React from "react";
import Page from "../../components/Page/Page";
import Navbar from "../../layouts/Navbar/Navbar";

export default () => (
  <Page id="about" title="About" description="This is about really cool stuff.">
    <Navbar />
    <p>What we're all about</p>
  </Page>
);

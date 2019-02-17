import React from "react";
import Page from "../../components/Page/Page";
import Navbar from "../../layouts/Navbar/Navbar";
import Text from "../../components/Text/Text";
import Container from "../../layouts/Container/Container";

export default () => (
  <Page
    id="not-found"
    title="Not Found"
    description="This is embarrassing."
    noCrawl
  >
    <Navbar />
    <Container narrow>
      <Text heading3 component="h3">
        I am so sorry that you have to go through this!
      </Text>
    </Container>
  </Page>
);

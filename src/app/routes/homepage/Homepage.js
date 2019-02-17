import styles from "./Homepage.module.scss";
import React from "react";
import Page from "../../components/Page/Page";

import Navbar from "../../layouts/Navbar/Navbar";
import Text from "../../components/Text/Text";
import Container from "../../layouts/Container/Container";

const Homepage = () => {
  return (
    <Page className={styles.root}>
      <Navbar />
      <Container narrow>
        <Text display1 component="h3">
          Tinker SSR
        </Text>
        <Text heading2 component="h4">
          Enjoy the delicious Server-Side-Rendering
        </Text>
        <Text small component="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
          voluptatibus tempore nisi ipsum debitis perspiciatis blanditiis
          corporis, fuga ad est iusto ex unde voluptatum magni deserunt numquam
          dolore repellendus animi doloremque ullam nesciunt culpa. Similique
          dolorum explicabo ipsum repudiandae fugit.
        </Text>
      </Container>
    </Page>
  );
};

export default Homepage;

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page from "../../components/Page/Page";

import { loginUser } from "../../../modules/auth";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import Container from "../../layouts/Container/Container";
import Navbar from "../../layouts/Navbar/Navbar";

const Login = props => (
  <Page id="login" title="Login" description="We need to log in to stuff.">
    <Navbar />
    <Container narrow>
      <Text display3 component="h1">
        Please sign in to continue
      </Text>
      <Button
        onClick={() => props.loginUser("user@mydomain.com", "password123")}
        primary
      >
        Sign in
      </Button>
    </Container>
  </Page>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loginUser }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Login);

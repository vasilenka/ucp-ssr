import React, { Component } from "react";
import { init } from "./PellCore";

import "./Pell.scss";
import Divider from "../../docs/Divider/Divider";
import Text from "../Text/Text";

class App extends Component {
  editor = null;

  constructor(props) {
    super(props);
    this.state = { html: null };
    this.pellRef = React.createRef();
  }

  componentDidMount() {
    if (this.pellRef.current) {
      this.editor = init({
        element: this.pellRef.current,
        onChange: html => this.setState({ html }),
        defaultParagraphSeparator: "div",
        actions: [
          "bold",
          "underline",
          "italic",
          "heading1",
          "heading2",
          "olist",
          "ulist",
          "strikethrough",
          "paragraph"
        ]
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Text heading3 component="h3" style={{ marginBottom: "12px" }}>
          Editor:{" "}
        </Text>
        <div ref={this.pellRef} id="editor" className="pell" />
        <Divider small />
        <Text heading3 component="h3" style={{ marginBottom: "12px" }}>
          HTML Output:{" "}
        </Text>
        <div id="html-output">{this.state.html}</div>
      </div>
    );
  }
}

export default App;

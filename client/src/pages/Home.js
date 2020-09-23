import React, { Component } from "react";
import Form from "../component/Form";

// form
var userIsRegistered = false;

class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <Form isRegistered={userIsRegistered} />

        <p>Wellcome to our web-site.</p>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import Input from "./Input";
import styled from "styled-components"



function Form(props) {
  return (
    <form className="from">
      <Input type="text" placeholder="UserName" />
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;

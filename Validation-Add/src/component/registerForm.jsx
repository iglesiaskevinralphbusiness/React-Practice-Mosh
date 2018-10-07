import React from "react";

import Joi from "joi-browser";

import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .max(15)
      .label("Password"),
    name: Joi.string().required()
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form action="" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "text")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name", "text")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;

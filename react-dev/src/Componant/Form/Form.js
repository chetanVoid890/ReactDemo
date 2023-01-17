// import "./FormInput.css";
import React, { useState } from "react";
import InputField from "../Input/Input";
import List from "../List/List";
const Form = (props) => {
  return (
    <div className="form-box">
      <div>{props.modal ? <InputField /> : ""}</div>

      <button className="form-button" onClick={props.onAddHandler}>
        ADD Input field
      </button>
    </div>
  );
};

export default Form;

import React from "react";
import styled from "../../style/radio.module.scss";
import RadioItem from "./RadioItem";
const Radio = () => {
  return (
    <div className={styled.radio}>
      <h1 className={styled.title}>Радио</h1>
      <RadioItem />
    </div>
  );
};

export default Radio;

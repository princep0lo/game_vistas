import React, { Component } from "react";
import colorpicker from "./css/colorpicker.module.css";

const ColorPicker = (props) => {
  return (
    <div className={colorpicker.colorPicker}>
      <div className={[colorpicker.colorButton, colorpicker.black].join(" ")} onClick={() => props.setBackground(colorpicker.black)}></div>
      <div className={[colorpicker.colorButton, colorpicker.dark].join(" ")} onClick={() => props.setBackground(colorpicker.dark)}></div>
      <div className={[colorpicker.colorButton, colorpicker.light].join(" ")} onClick={() => props.setBackground(colorpicker.light)}></div>
      <div className={[colorpicker.colorButton, colorpicker.darkblue].join(" ")} onClick={() => props.setBackground(colorpicker.darkblue)}></div>
      <div className={[colorpicker.colorButton, colorpicker.purple].join(" ")} onClick={() => props.setBackground(colorpicker.purple)}></div>
      <div className={[colorpicker.colorButton, colorpicker.darkgreen].join(" ")} onClick={() => props.setBackground(colorpicker.darkgreen)}></div>
      <div className={[colorpicker.colorButton, colorpicker.white].join(" ")} onClick={() => props.setBackground(colorpicker.white)}></div>
    </div>
  );
};

export default ColorPicker;

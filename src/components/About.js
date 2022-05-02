import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Hello world I am a Software Developer and I love React </p>
    <img src={image} alt = "I made this"></img>
  </div>
}

export default About;

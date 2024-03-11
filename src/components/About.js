import React from "react";
import UserLink from "./Links";

function About({ bio, linkedin, github }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : <></>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <UserLink linkedin={linkedin} github={github} />
    </div>
  );
}

export default About;

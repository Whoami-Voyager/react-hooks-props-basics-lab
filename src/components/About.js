import React from "react";
import user from "../data/user"
import UserLink from "./Links";

function About({bio}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio?<p>{bio}</p>:<></>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <UserLink linkedin={user.links.linkedin} github ={user.links.github}/>
    </div>
  );
}

export default About;

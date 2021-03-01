import React from "react";
import Content from "../components/content";
import About from "../components/About";
import Me from "../assets/images/Me.jpg";

function AboutPage(props) {
  return (
    <div>
      <About title={props.title} />

      <img className="main-img" src={Me} alt="Me" />
      <br></br>
      <Content>
        <p>
          I was born in Salt Lake City Utah where I learned to love sports. As I
          grew up I and my body didnt like sports anymore I turned more to video
          games. That's where my intrest in computers and what ultimately got me
          into web development. I just finished the full stack web develeopment
          bootcamp at the University of Utah. You can check it out my github
          profile{" "}
          <a
            href="https://github.com/coatsey"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          , or on the Portfolio page. 
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;

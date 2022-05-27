import React from "react";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";

export default function AboutMe() {
  return (
    <>
      <Nav />
      <Header />
      <div>
        <h2> Meet the dev:</h2>
        <p className="bio">
          Hello! My name is Mikayla and I made this application because I
          struggle with executive dysfunction when it comes to my ADHD. I also
          suffer from time blindness and sometimes I forget to eat and drink. I
          know not every one experience ADHD like I do but I wanted to make this
          application to help me any maybe a few others. I would love to make a
          timer feature so that I would be alerted periodically to prevent
          hyperfixation on some thing for prolonged periods of time. My links
          are below and would love feed back from you of what I should add or
          what you think would be helpful! Thank you so much and have a great
          day!
        </p>
      </div>
      <Footer />
    </>
  );
}

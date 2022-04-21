import React from "react";
import { Helmet } from "react-helmet-async";
import PageTitle from "../Shared/Pagetitle/PageTitle";
import "./About.css";

const About = () => {
  return (
    <div>
      <PageTitle title="About"></PageTitle>
      <p>This is about us</p>
    </div>
  );
};

export default About;

import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! Welcome <br />
        To My Portfolio
      </SectionTitle>
      <SectionText>
        My name is Eduardo Castro aka 'Due'. I'm a Web Developer with some
        experience in ReactJS, NextJS, JavaScript, TypeScript, JSX, HTML5 and
        CSS3.
        <br />
        I'm also a bit acquainted to some back-end stuff, like NodeJS, API Rest
        databases.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>Tell Me More</Button>
    </LeftSection>
  </Section>
);

export default Hero;

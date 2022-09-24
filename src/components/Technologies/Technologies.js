import React from "react";
import { DiFirebase, DiReact, DiZend, DiBootstrap } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiJavascript } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider />
    <SectionTitle main>Skills</SectionTitle>
    <SectionText>
      I've been working for a while with ReactJS, JavaScript, HTML and CSS, but
      also have some knowledge in the backend stack.
      <br />
      Landing pages, e-commerces and business/brand websites, are some of the
      projects I have done.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front end</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            ReactJS/JSX
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBootstrap size="4rem" />
        <ListContainer>
          <ListTitle>Front end</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            BootStrap and React BootStrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front end</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            NextJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiJavascript size="4rem" />
        <ListContainer>
          <ListTitle>Front end</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTypescript size="4rem" />
        <ListContainer>
          <ListTitle>Front end</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Back end</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            NodeJS and databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

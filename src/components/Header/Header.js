import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCode } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "10px",
          }}
        >
          <DiCode size={"3em"} />{" "}
          <Span style={{ fontSize: "29px" }}>DueCoder</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" passHref>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact" passHref>
          <NavLink>Talk To Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/duecoder" target="_blank">
        <AiFillGithub size={"4rem"} />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/eduardodue" target="_blank">
        <AiFillLinkedin size={"4rem"} />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/dueprod" target="_blank">
        <AiFillInstagram size={"4rem"} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:16997890512">(16) 99789-0512</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:eduardodecastro@outlook.com">
            eduardodecastro@outlook.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer style={{ marginTop: "15px" }}>
          <Slogan style={{ letterSpacing: "4px" }}>
            THE KEY IS TO NEVER STOP
          </Slogan>
        </CompanyContainer>
        <SocialContainer style={{ marginRight: "3px" }}>
          <SocialIcons style={{ marginLeft: "5px" }} href="https://github.com">
            <AiFillGithub size={"4rem"} />
          </SocialIcons>
          <SocialIcons
            style={{ marginLeft: "5px" }}
            href="https://linkedin.com"
          >
            <AiFillLinkedin size={"4rem"} />
          </SocialIcons>
          <SocialIcons
            style={{ marginLeft: "5px" }}
            href="https://instagram.com"
          >
            <AiFillInstagram size={"4rem"} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { GoBrowser } from "react-icons/go";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <div>
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
                <UtilityList>
                  <ExternalLinks href={visit} target="_blank">
                    <DiGithubBadge size={30} />
                    <br />
                    GitHub
                  </ExternalLinks>
                  <ExternalLinks
                    href={source ? source : "javascript:void(0);"}
                    target={source ? "_blank" : ""}
                  >
                    <GoBrowser size={30} />
                    <br />
                    Visit
                  </ExternalLinks>
                </UtilityList>
              </div>
            </BlogCard>
          </div>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;

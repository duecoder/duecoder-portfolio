import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 5fr));
  padding: 3rem;
  place-items: center;
  column-gap: 4rem;
  row-gap: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 15px rgba(132, 143, 75, 0.5);
  text-align: center;
  background: #d1d7ad;
  width: 420px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  padding-top: 10px;
  color: #505050;
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #000;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #848f4b;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #000;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d1d7ad;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  background: #3a4218;
  border-radius: 2px;
  width: 90px;
  transition: 0.5s;
  &:hover {
    background: #848f4b;
    color: #000;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  padding-bottom: 2px;
`;
export const Tag = styled.li`
  color: #000;
  font-size: 1.5rem;
`;

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .form-style{
    justify-content: space-between;
  }
  .hero {
    @media ${(props) => props.theme.breakpoints.sm} {
      // margin-top: 110px;
    }
  }
  form {
    max-width: 65%;
    justify-content: center;
    text-align: center;
    line-height: 3em;
    font-family: ${(props) => props.theme.fonts.main};
  }
  form input {
    width: 95%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    justify-content: space-around;
    border-radius: 20px;
    color: #fff;
    margin: 12px 0 10px 0px;
    padding: 18px 26px;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.8px;
    transition: 0.3s ease-in-out;
  }
  form input:active {
    box-shadow: 2px 2px 15px rgba(132, 143, 75, 0.5);
  }
  form textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    color: #fff;
    margin: 12px 0 5px 0;
    padding: 18px 26px;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.8px;
    transition: 0.3s ease-in-out;
  }
  form input::placeholder, form textarea::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }
  form button {
    font-weight: 700;
    color: #000;
    background-color: #fff;
    padding: 14px 48px;
    font-size: 18px;
    margin-top: 10px;
    border: none;
    border-radius: 0;
    position: relative;
    transition: 0.3s ease-in-out;
    @media ${(props) => props.theme.breakpoints.sm} {
      margin-top: 4px;
      margin-bottom: 15px;
    }
  }
  form button span {
    z-index: 1;
    position: relative;
  }
  form button:hover {
    // color: #fff;
  }
  form button::before {
    content: "";
    background: #848f4b;
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    transition: 0.3s ease-in-out;
  }
  form button:hover::before {
    width: 100%;
  }
`;

export default GlobalStyles;

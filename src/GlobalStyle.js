import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: #142E38;
  }

  body {
    background-color: #ffffff;
    background-image: linear-gradient(43deg, #ffffff 0%, #d0f2e4 46%, #ffffff 100%);
    background-attachment: fixed;
  }
`
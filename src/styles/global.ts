import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${(props) => props.theme["color-background"]};
    color: ${(props) => props.theme["text-base"]};
    -webkit-font-smoothing: antialiased;
    font-family: "Poppins", sans-serif;
    
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  h1 {
    font-weight: 500;
  }

  /* input {
    outline: none;
  }

  .icons, button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  button, input {
    border: none;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    appearance: textfield;
  } */
`;

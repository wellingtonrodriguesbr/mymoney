import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --shape: #fff;
  --red: #e52e40;
  --green: #33cc95;  
  --purple: #5429cc;
  --purple-light: #6933ff;
  --text-title: #363f5f;
  --text-body: #969cb3;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    width: 100%;
    height: 100vh;
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
  }

  .modal {
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

    .close-modal {
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      cursor: pointer;
      font-size: 1.5rem;
      transition: 0.3s;
      border: none;
      padding: 0.5rem;
      background-color: transparent;
    }

  }

`;

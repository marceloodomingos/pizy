import { createGlobalStyle } from "styled-components";

import { Variables } from "./variables";

export const GlobalStyles = createGlobalStyle`
  ${Variables}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-main)
  }

  body {
    background: var(--background);
    color: var(--white);
    overflow: auto hidden;

    &.open {
      height: 100vh;
      overflow: hidden;
    }
  }

  /* main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    max-width: 1400px;
    min-height: calc(100vh - 100px);

    margin: 0 auto;

    > div {
        width: 100%;
        padding: 3rem 1rem;

        @media (max-width: 978px) {
          padding: 1rem;
        }
    }
  } */

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100vw;
    height: max-content;
    overflow-x: hidden;
    background: var(--background);
    color: var(--white);

    &::-webkit-scrollbar {
      width: .5rem;
    }
    /* &::-webkit-scrollbar-track {
      background: var(--raisin-black);
    } */
    &::-webkit-scrollbar-thumb {
      background: var(--white);
      border-radius: 9999px;
    }
    /* &::-webkit-scrollbar-thumb:hover {
      background: var(--english-violet-50);
    } */
  }

  button {
    border: unset;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;

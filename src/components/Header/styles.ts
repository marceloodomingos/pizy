import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  z-index: 10;

  > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    #logo {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;
      text-decoration: none;

      z-index: 11;

      > img {
        width: 100%;
        padding: 1rem;
        height: 100%;

        pointer-events: none;
        user-select: none;
      }

      > span {
        font-weight: 700;
        font-size: 1.35rem;
        font-style: italic;

        @media (max-width: 550px) {
          display: none;
        }
      }

      @media (max-width: 900px) {
        min-width: 80px;
      }
    }

    > ul {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 1rem;
      list-style: none;

      z-index: 10;

      > a {
        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        color: var(--black);

        padding: 1rem;
        border-radius: 0.5rem;

        cursor: pointer;
        position: relative;

        transition: 0.35s all ease;

        @media (min-width: 900px) {
          height: 100%;
        }

        @media (max-width: 900px) {
          text-align: center;
          width: 100%;

          opacity: 0;
          transform: translateY(100%);
        }
      }

      .shortcuts {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        max-height: 80px;

        svg {
          width: 1.25rem;
          height: 1.25rem;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;

          height: 100%;

          gap: 1rem;
          transition: 0.25s all ease;

          cursor: help;

          @media (min-width: 900px) {
            width: 2.5rem;

            &:hover {
              transform: translateY(-0.15rem);

              opacity: 0.5;
            }
          }

          @media (max-width: 900px) {
            width: 100%;
          }
        }

        @media (min-width: 900px) {
          margin-left: 1rem;
        }

        @media (max-width: 900px) {
          position: absolute;

          bottom: 0;

          width: 100%;
          max-height: 80px;

          background: var(--black);
          color: var(--white);

          svg {
            width: 1.5rem;
            height: 1.5rem;

            fill: var(--white);
          }

          #help:after {
            content: "Dúvidas";
          }

          #github:after {
            content: "GitHub";
          }
        }
      }

      @media (min-width: 900px) {
        height: 100%;
      }

      @media (max-width: 900px) {
        position: absolute;
        top: 0;
        left: 0;

        flex-direction: column;
        transform: translateY(-100%);

        background: var(--brand-yellow);
        transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);

        height: 100vh;
        width: 100%;

        &:after {
          position: absolute;
          top: 0;

          opacity: 0;

          content: "";
          /* background: var(--brand-yellow); */
          width: 100%;
          height: 0;
        }

        &.menu-opened {
          transform: translateY(0);

          > a {
            opacity: 1;
            transform: translateY(0);

            transition: 0.75s all ease-out;
          }

          &:after {
            opacity: 1;
            height: 80px;
            transition: 0.5s all ease-out;
          }
        }
      }

      @media (max-height: 500px) {
        padding-top: 80px;
      }
    }

    > .burger-container {
      position: relative;
      display: flex;
      height: 80px;
      width: 80px;

      background: unset;
      border: unset;

      cursor: pointer;
      z-index: 11;

      transform: rotate(0deg);
      transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);

      user-select: none;
      -webkit-tap-highlight-color: #0000;

      @media (min-width: 900px) {
        display: none;
      }

      .burger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        > .bar {
          width: 100%;
          max-width: 2rem;
          height: 1px;

          background: var(--black);
          transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
          transition-delay: 0s;

          &:first-child {
            transform: translateY(-3px) rotate(0deg);
          }

          &:last-child {
            transform: translateY(3px) rotate(0deg);
          }
        }
      }

      &.menu-opened {
        transform: rotate(-90deg);

        .burger {
          > .bar {
            transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
            /* transition-delay: 0.2s; */

            &:first-child {
              transform: translateY(0) rotate(45deg);
            }

            &:last-child {
              transform: translateY(0) rotate(-45deg);
            }
          }
        }
      }
    }
  }
`;

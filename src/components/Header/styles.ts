import styled from "styled-components";

interface HeaderProps {
  light?: boolean;
  absolute?: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  width: 100%;
  height: 100px;
  z-index: 10;

  position: ${(props) => props.absolute && "absolute"};
  top: 0;

  > nav {
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 1650px;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    gap: 1rem;

    #logo {
      display: flex;
      justify-content: center;
      align-items: center;

      min-width: 100px;
      width: 100%;
      max-width: 100px;

      height: 100%;
      text-decoration: none;

      z-index: 11;

      > img {
        width: 100%;
        padding: 1rem;
        height: 100%;

        pointer-events: none;
        user-select: none;

        filter: ${(props) => props.light && "invert(1)"};
      }
    }

    > ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      gap: 1rem;
      list-style: none;

      z-index: 10;

      > div {
        display: flex;
        justify-content: center;
        align-items: center;

        > a {
          display: flex;
          justify-content: center;
          align-items: center;

          text-decoration: none;
          color: ${(props) => (props.light ? "var(--white)" : "var(--black)")};

          padding: 1rem 1.5rem;
          border-radius: 0.5rem;

          cursor: pointer;
          position: relative;

          transition: 0.35s all ease;

          &.active {
            font-weight: bold;
          }

          @media (min-width: 900px) {
            height: 100%;

            &:not(.active):hover {
              text-decoration: underline;
            }
          }

          @media (max-width: 900px) {
            text-align: center;
            width: 100%;

            opacity: 0;
            transform: translateY(100%);
          }
        }
      }

      .actions {
        gap: 1rem;

        > a {
          padding: 1rem 3rem;
        }

        > .user {
          display: flex;
          justify-content: center;
          align-items: center;

          border: unset;
          background: var(--white);

          min-width: 3rem;
          width: 100%;
          max-width: 3rem;

          min-height: 3rem;
          height: 100%;
          max-height: 3rem;

          padding: 2px;
          border-radius: 50%;

          cursor: pointer;

          > img {
            width: 100%;
            height: 100%;

            border-radius: 50%;

            pointer-events: none;
            user-select: none;
          }
        }
      }

      @media (min-width: 1200px) {
        height: 100%;
      }

      @media (max-width: 1200px) {
        position: absolute;
        top: 0;
        left: 0;

        flex-direction: column;
        transform: translateY(-100%);

        background: var(--background);
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

      @media (min-width: 1200px) {
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

          background: ${(props) =>
            props.light ? "var(--white)" : "var(--black)"};
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

    @media (max-width: 1650px) {
      justify-content: space-between;
    }
  }
`;

import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  min-height: 500px;

  gap: 4rem;
  /* padding: 4rem 2rem; */

  background: var(--black-full);

  > .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 2rem;
    width: 100%;
    max-width: 1200px;

    padding: 4rem 1rem;

    position: relative;

    img {
      width: 100%;
      max-width: 5rem;

      /* padding: 1rem; */

      filter: invert(1);
    }

    .social {
      display: flex;
      flex-direction: column;

      height: 100%;
      gap: 1rem;

      > a {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 2.5rem;
        height: 2.5rem;

        border-radius: 50%;
        background: var(--black-dark);

        transition: var(--transition);

        svg {
          fill: var(--white);

          width: 100%;
          max-width: 1rem;
          height: 100%;
          max-height: 1rem;
        }

        &:hover {
          background: var(--black);
        }
      }

      @media (max-width: 768px) {
        flex-direction: row;
      }
    }

    .links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;

      width: 100%;
      max-width: 1000px;

      gap: 2rem;

      > div {
        display: flex;
        flex: 0 1 150px;
        flex-direction: column;

        gap: 1.5rem;

        width: 100%;
        /* min-width: 100px; */

        > span {
          font-size: 0.85rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;

          color: var(--white-dark-active);
        }

        > ul {
          display: flex;
          flex-direction: column;

          gap: 1rem;

          > a {
            text-decoration: none;
            color: var(--white);

            &:not(:hover) {
              color: var(--white-darker);
            }
          }
        }

        @media (max-width: 768px) {
          /* justify-content: center;
          align-items: center;

          text-align: center; */

          &:nth-child(odd) {
            text-align: right;
          }

          &:last-child {
            text-align: center;
          }
        }
      }

      @media (max-width: 768px) {
        flex-basis: 1 1 50%;
        /* flex-wrap: nowrap; */
        /* flex-direction: column; */
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 4rem;
    }
  }

  > .legal-content {
    --background-color: #111;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1200px;

    padding: 2rem 1rem;
    gap: 2rem;

    color: var(--white-darker);
    background: var(--background-color);
    box-shadow: 0 0 0 100vmax var(--background-color);
    clip-path: inset(0 -100vmax);

    > .links {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;

      > ul {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 1rem;

        > a {
          text-decoration: none;
          color: var(--white-darker);

          &:hover {
            color: var(--white-dark-active);
          }
        }

        @media (max-width: 900px) {
          flex-wrap: wrap;
        }
      }
    }

    > p {
      text-align: justify;
    }

    > div:not(.links) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      @media (max-width: 900px) {
        gap: 1rem;
      }
    }

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

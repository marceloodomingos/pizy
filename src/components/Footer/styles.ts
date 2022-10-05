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
  padding: 4rem 2rem;

  background: var(--black-full);

  > .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 2rem;
    width: 100%;
    max-width: 1400px;

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

            &:hover {
              text-decoration: underline;
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
    display: flex;
    flex-direction: column;

    gap: 2rem;

    text-align: center;

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

    > div {
      display: flex;
      flex-direction: column;

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

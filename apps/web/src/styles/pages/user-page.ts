import styled, { keyframes } from "styled-components";

const revealImage = keyframes`
  0% {
    opacity: 0,
  }
  100% {
    opacity: 1,
  }
`;

export const UserContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  position: relative;
  padding-top: 100px;

  .bg {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;

    overflow: hidden;
    mask-image: linear-gradient(to top, transparent, black);
    opacity: 0.1;

    pointer-events: none;
    user-select: none;

    > img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      filter: grayscale(1);

      pointer-events: none;
      user-select: none;
      z-index: -1;

      animation: ${revealImage} 3s ease;

      @media (max-width: 900px) {
        margin-top: -10vw;
      }
    }
  }
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 1400px;

  margin: 0 auto;
  padding: 1rem;

  gap: 4rem;

  > .about {
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    gap: 2rem;
    padding: 1rem;

    color: var(--white);

    z-index: 2;

    > img {
      min-width: 250px;
      width: 100%;
      max-width: 250px;

      min-height: 250px;
      height: 100%;
      max-height: 250px;

      border-radius: 1rem;
      background: var(--white);

      pointer-events: none;
      user-select: none;
    }

    > .content {
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 100%;
      gap: 1rem;

      .user {
        display: flex;
        flex-direction: column;
        flex: 1;

        > span {
          display: flex;
          align-items: center;

          gap: 1rem;

          font-weight: 900;
          font-size: 2.5rem;

          > b {
            font-size: 1rem;

            padding: 0.25rem 0.75rem;
            border: 1px solid var(--white);
            border-radius: 1rem;
            color: var(--white);

            cursor: help;

            &:hover {
              background: var(--white);
              color: var(--black);
            }
          }

          @media (max-width: 900px) {
            flex-direction: column;
            justify-content: center;

            font-size: 2rem;
            gap: 1rem;
          }
        }

        > p {
          font-weight: 300;
          font-size: 1rem;
        }

        @media (max-width: 900px) {
          text-align: center;
          gap: 1rem;
        }
      }

      .social {
        display: flex;
        align-items: center;

        gap: 2rem;

        list-style: none;

        a {
          display: flex;
          align-items: center;

          text-decoration: none;

          gap: 1rem;
          color: var(--white);
          transition: var(--transition);

          > svg {
            width: 100%;
            max-width: 1.5rem;
            height: 100%;
            max-height: 1.5rem;

            fill: var(--white);
            transition: var(--transition);
          }

          &:hover {
            opacity: 0.5;

            > svg {
              padding: 0.05rem;
            }
          }
        }

        @media (max-width: 900px) {
          justify-content: center;
          flex-wrap: wrap;

          gap: 1rem;

          > a {
            margin: 0 1rem;
          }
        }
      }
    }

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;

      padding: 1rem 0;
    }
  }

  > div:not(:first-child) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--white);

    gap: 2rem;

    > h1 {
      width: 100%;

      font-size: 1.75rem;
      text-transform: uppercase;
    }

    > ul {
      display: flex;
      flex-wrap: wrap;

      width: 100%;

      list-style: none;
      gap: 1rem;

      > li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 100%;

        flex: 1 1 500px;
        border: 1px solid var(--white);
        border-radius: 1rem;

        padding: 1rem;

        gap: 1rem;

        > span {
          font-weight: bold;
          text-transform: capitalize;
        }

        > ul {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          width: 100%;

          > a {
            width: 100%;
            max-width: 2.5rem;

            > img {
              width: 100%;
              height: 100%;

              border: 0.1rem solid var(--white);
              border-radius: 50%;

              pointer-events: none;
              user-select: none;
            }

            & + a {
              margin-left: -0.75rem;
            }

            &:hover {
              transform: scale(1.05);
            }
          }

          &.stats {
            padding-top: 1rem;
            border-top: 1px solid var(--white);
            justify-content: space-evenly;

            list-style: none;

            > li {
              display: flex;
              justify-content: center;
              align-items: center;

              gap: 0.5rem;
            }
          }
        }
      }
    }

    > img {
      width: 100%;
      max-width: 600px;

      pointer-events: none;
      user-select: none;
    }
  }
`;

import styled, { keyframes } from "styled-components";

const cardReveal = keyframes`
  0% {
    transform: translate(-50%, 100%) rotate(-15deg) scale(0.85);
    opacity: 0;
  }

  100% {
    transform: translate(-50%, 0) rotate(15deg) scale(0.85);
    opacity: 1;
  }
`;

export const Presentation = styled.div`
  display: grid;
  grid-template-columns: 50fr 50fr;
  align-items: center;

  width: 100vw;
  max-width: 100%;
  height: 100vh;
  padding: 0;

  position: relative;
  overflow: hidden;

  > .card {
    position: absolute;
    bottom: 5rem;
    left: 50%;

    animation: ${cardReveal} 3s ease;
    transform: translate(-50%, 0) rotate(15deg) scale(0.85);

    /* pointer-events: none; */
    transition: var(--transition);

    z-index: 3;

    &:hover {
      transform: translate(-50%, 0) rotate(15deg) scale(0.835);
    }

    @media (max-width: 950px) {
      display: none;
    }
  }

  > img {
    width: 100%;
    height: 100vh;

    object-fit: cover;
    user-select: none;
    pointer-events: none;

    mask-image: linear-gradient(to bottom, transparent, 10%, black 20%);
  }

  > .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--white);
    gap: 2rem;

    padding: 0 2rem;

    > div {
      width: 100%;
      max-width: 640px;
    }

    .slogan {
      width: 100%;
      max-width: 640px;

      font-weight: 700;

      > span {
        font-style: italic;

        background: linear-gradient(69.7deg, #ff1074 55.59%, #1700a5 82.75%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

        padding: 0 0.5rem;
        margin: 0 -0.5rem;
      }

      @media (min-width: 1200px) {
        font-size: 5.5rem;
      }

      @media (max-width: 1200px) {
        font-size: 4.5rem;
      }

      @media (max-width: 900px) {
        font-size: 4rem;
      }

      @media (max-width: 600px) {
        font-size: 3rem;
      }
    }

    > p {
      width: 100%;
      max-width: 640px;

      font-weight: 300;
    }

    .actions {
      display: flex;
      align-items: center;

      > a {
        padding: 1rem 3rem;
        color: var(--white);

        text-align: center;
        text-decoration: none;
        border-radius: 1rem;

        font-weight: 500;
        transition: var(--transition);

        &:first-child {
          color: var(--black);
          background: var(--white);

          min-width: 200px;

          &:hover {
            filter: brightness(85%);
          }
        }

        &:hover {
          filter: brightness(50%);
        }
      }
    }

    @media (max-width: 900px) {
      margin: 0 2rem;
    }
  }

  .social {
    display: flex;

    width: 100%;
    max-width: 640px;

    gap: 2rem;

    position: absolute;
    bottom: 5rem;

    > a {
      display: flex;
      align-items: center;

      text-decoration: none;

      gap: 1rem;
      color: var(--white);

      > p {
        opacity: 0.5;
        transition: var(--transition);

        @media (max-width: 650px) {
          display: none;
        }
      }

      > svg {
        width: 100%;
        max-width: 1.5rem;

        fill: var(--white);
        transition: var(--transition);
      }

      &:hover {
        > p {
          opacity: 1;
        }

        > svg {
          transform: scale(1.1);
        }
      }
    }

    @media (max-width: 1400px) {
      left: 2rem;
    }

    @media (max-width: 900px) {
      justify-content: center;

      left: 50%;
      transform: translate(-50%);
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;

    align-content: center;
    justify-content: center;
    align-items: center;

    text-align: center;

    .actions {
      justify-content: center;
    }

    > img {
      display: none;
    }
  }
`;

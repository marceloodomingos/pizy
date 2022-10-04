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

    @media (min-width: 1200px) {
      &#mobile-image {
        display: none;
      }
    }

    @media (max-width: 1200px) {
      &#desktop-image {
        display: none;
      }
    }
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

        background: var(--gradient-pink-purple);
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

      @media (max-width: 600px) {
        flex-direction: column;

        gap: 1rem;

        > a {
          width: 100%;
        }
      }
    }

    @media (max-width: 900px) {
      margin: 0 2rem;
      padding: 0;
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

export const OurPurpose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  min-height: 350px;

  padding: 0 2rem;

  background: var(--gradient-pink-purple-black);

  .content {
    display: grid;
    grid-template-columns: 30fr 70fr;
    align-items: center;

    width: 100%;
    max-width: 1400px;

    position: relative;

    margin: 0 auto;
    color: var(--white);

    gap: 1rem;

    > span {
      font-weight: 800;
      font-size: 3rem;
      line-height: 100%;

      text-transform: uppercase;

      @media (max-width: 900px) {
        font-size: 2rem;
      }
    }

    > div {
      display: flex;
      flex-direction: column;

      gap: 1rem;

      > p {
        font-weight: 200;
        font-size: 1.25rem;
        line-height: 120%;

        @media (max-width: 900px) {
          font-size: 1rem;
        }
      }
    }

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;

      text-align: center;
    }
  }

  > img {
    position: absolute;
    right: 2rem;
    bottom: -45%;

    filter: invert(1);
    z-index: 1;

    width: 100%;
    max-width: 150px;

    object-fit: cover;

    pointer-events: none;
    user-select: none;

    @media (max-width: 900px) {
      right: unset;

      max-width: 100px;
      bottom: -42.5%;

      padding: 1rem;
    }
  }

  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;

export const OurCommunity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin: 0 auto;
  padding: 0 2rem;

  position: relative;
  overflow: hidden;

  .container {
    width: 100%;
    max-width: 1400px;

    margin: 0 auto;
    z-index: 1;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      width: 100%;
      max-width: 700px;
      gap: 3rem;

      z-index: 1;

      > h1 {
        font-weight: 800;
        font-size: 3rem;
        line-height: 100%;

        text-transform: uppercase;

        @media (max-width: 900px) {
          font-size: 2rem;
        }
      }

      > div {
        display: flex;
        flex-direction: column;

        gap: 2rem;

        > p {
          font-weight: 200;
          font-size: 1.25rem;
          line-height: 120%;

          @media (max-width: 900px) {
            font-size: 1rem;
          }
        }

        @media (max-width: 900px) {
          gap: 1.5rem;
        }
      }

      > a {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: 350px;

        padding: 1rem 4rem;
        border-radius: 1rem;

        gap: 1rem;

        text-decoration: none;
        font-weight: 500;
        font-size: 1rem;
        line-height: 120%;

        /* background: var(--white); */
        color: var(--white);
        border: 1px solid var(--white);

        transition: var(--transition);

        &:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        > svg {
          width: 100%;
          max-width: 1rem;
          height: 100%;
          max-height: 1rem;

          fill: var(--white);
        }
      }

      @media (max-width: 900px) {
        justify-content: center;
        align-items: center;

        text-align: center;
        max-width: unset;
      }
    }

    > svg {
      position: absolute;
      right: -25%;

      width: 100%;
      max-width: 650px;

      fill: var(--white);
      mask-image: linear-gradient(
        270deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );

      @media (max-width: 1300px) {
        right: -50%;
      }

      @media (max-width: 1140px) {
        right: -40%;
        max-width: 500px;
      }

      @media (min-width: 900px) {
        top: 50%;
        bottom: 50%;

        transform: translate(-50%, -50%);
      }

      @media (max-width: 900px) {
        top: 15%;
        right: 50%;
        left: 50%;

        transform: translate(-50%, 0);
        max-width: 150px;

        mask-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }
  }

  > img {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    z-index: 0;
  }

  @media (min-width: 900px) {
    height: 100vh;
  }

  @media (max-width: 900px) {
    min-height: 50vh;

    padding: 10rem 2rem 5rem;
  }
`;

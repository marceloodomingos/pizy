import styled, { keyframes } from "styled-components";

const rollLemon = keyframes`
  0% {
    transform: rotate(-8deg);
  }
  100% {
    transform: rotate(8deg);
  }
`;

export const Presentation = styled.div`
  display: grid;
  grid-template-columns: 50fr 50fr;
  align-items: center;

  height: calc(100vh - 100px);
  padding-bottom: 100px;

  gap: 3rem;
  position: relative;

  .slogan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 2rem;
    width: 100%;

    > h1 {
      font-size: 4rem;
      line-height: 100%;

      @media (max-width: 978px) {
        font-size: 3rem;
      }
    }

    .actions {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      gap: 1rem;

      > a {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 0.85rem;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;

        padding: 1rem 3rem;
        color: var(--black);
        background: #f7db2d;

        position: relative;
        border-radius: 0.5rem;

        transition: 0.25s all ease;

        > svg {
          height: 0;
          width: 0;

          visibility: hidden;
          transition: 0.25s all ease;
        }

        &:not(:first-child) {
          padding: 1rem 5rem;

          background: var(--brand-yellow);
        }

        &:hover {
          > svg {
            height: 1rem;
            width: 1rem;

            visibility: visible;
            margin-left: 1rem;
          }
        }
      }

      @media (max-width: 978px) {
        justify-content: center;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 1rem;

        > a {
          padding: 1rem;
          width: 100%;
          max-width: 300px;
        }
      }
    }

    @media (max-width: 978px) {
      gap: 1rem;
      align-items: center;

      text-align: center;
    }
  }

  > img {
    width: 100%;
    height: 50%;

    object-fit: cover;

    /* filter: drop-shadow(10px 10px 150px var(--english-violet)); */

    pointer-events: none;
    user-select: none;

    animation: ${rollLemon} 1s ease-in-out infinite alternate;
    transform-origin: center;

    @media (max-width: 978px) {
      width: 100%;
      max-width: 200px;

      height: 100%;
      max-height: 250px;
    }
  }

  @media (max-width: 978px) {
    display: flex;
    flex-direction: column;

    height: auto;
    gap: unset;
  }
`;

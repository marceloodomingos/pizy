import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    filter: brightness(50%) blur(5px);
  }
  100% {
    filter: unset;
  }
`;

export const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  gap: 3rem;

  > h1 {
    font-size: 3rem;
    line-height: 100%;

    @media (max-width: 978px) {
      font-size: 2rem;
    }
  }

  > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    > a {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      gap: 2rem;

      padding: 1.5rem;
      border-radius: 1rem;

      text-decoration: none;
      cursor: pointer;

      transition: var(--transition);

      > img {
        width: 100%;
        max-width: 100px;

        border-radius: 50%;
        object-fit: cover;

        pointer-events: none;
        user-select: none;

        animation: ${loading} 1s ease;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        width: 100%;
        height: 100%;

        > a {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          color: var(--black);

          text-decoration: none;
          gap: 1rem;

          > span {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            text-transform: lowercase;
            font-weight: bold;
            font-size: 1.5rem;

            gap: 0.5rem;

            > svg {
              width: 1rem;
              height: 1rem;
            }
          }

          > p {
            opacity: 0.5;
          }
        }

        > blockquote {
          width: 100%;
          max-width: 80%;

          text-align: left;
          text-transform: capitalize;

          margin-top: 0.5rem;
        }
      }

      > svg {
        width: 2rem;
        height: 100%;

        padding: 0.45rem;
      }

      &:nth-child(even) {
        background: #fdfae2;
      }

      &:nth-child(odd) {
        background: #fdfcec;
      }

      @media (min-width: 768px) {
        border-left: 0 solid transparent;

        &:hover {
          border-left: 0.5rem solid var(--brand-yellow);
        }
      }

      @media (max-width: 768px) {
        border-width: 0.25rem 0;
        border-style: solid;
        border-color: var(--brand-yellow);
        flex-direction: column;

        overflow: hidden;

        > img {
          width: 100vw;
          max-width: unset;
          height: 100%;
          max-height: 35vw;

          object-fit: cover;
          border-radius: unset;

          /* border-bottom: 0.25rem solid var(--brand-yellow); */
          margin-top: -1.5rem;

          filter: brightness(50%);
        }

        .info {
          justify-content: center;
          align-items: center;

          > a {
            flex-direction: column;
            gap: 0.25rem;
          }

          blockquote {
            text-align: center;
            color: var(--black);
          }
        }
      }
    }

    @media (max-width: 768px) {
      gap: 1rem;
    }
  }
`;

export const WantJoin = styled.div``;

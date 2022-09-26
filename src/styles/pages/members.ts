import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    filter: brightness(1500%) blur(10px);
  }
  100% {
    filter: unset;
  }
`;

const loadingMobile = keyframes`
  0% {
    filter: brightness(1500%) blur(10px);
  }
  100% {
    filter: brightness(50%);
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
    gap: 1rem;

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
        min-width: 100px;
        width: 100%;
        max-width: 100px;

        min-height: 100px;
        height: 100%;
        max-height: 100px;

        border-radius: 50%;
        object-fit: cover;

        pointer-events: none;
        user-select: none;

        background: var(--brand-yellow);
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        width: 100%;
        height: 100%;

        color: var(--black);

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
            text-transform: capitalize;
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

        opacity: 0.5;

        padding: 0.45rem;
        color: var(--black);

        transition: var(--transition);
      }

      &:nth-child(even) {
        background: #fdfae2;
      }

      &:nth-child(odd) {
        background: #fdfcec;
      }

      @media (min-width: 768px) {
        border-left: 0 solid transparent;

        > img {
          animation: ${loading} 1.5s;
        }

        &:hover {
          border-left: 0.5rem solid var(--brand-yellow);

          > svg {
            opacity: 1;
          }
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
          min-height: 50vw;
          height: 100%;
          max-height: 50vw;

          object-fit: cover;
          border-radius: unset;

          background: var(--brand-yellow);

          /* border-bottom: 0.25rem solid var(--brand-yellow); */
          margin-top: -1.5rem;
          filter: brightness(50%);

          animation: ${loadingMobile} 1.5s;
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

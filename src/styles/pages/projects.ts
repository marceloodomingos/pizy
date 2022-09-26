import styled from "styled-components";

export const ProjectsList = styled.div`
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
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;

    width: 100%;
    gap: 1rem;

    > a {
      display: flex;
      flex: 1 1 500px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      width: 100%;
      gap: 1rem;

      padding: 1.5rem;
      border-radius: 1rem;

      text-align: left;
      text-decoration: none;

      color: var(--black);
      transition: var(--transition);

      cursor: pointer;

      > img {
        width: 100%;
        max-width: 100px;

        border-radius: 50%;
        object-fit: cover;

        pointer-events: none;
        user-select: none;

        background: var(--brand-yellow);
      }

      > .info {
        width: 100%;

        padding-bottom: 1rem;
        border-bottom: 0.1rem solid var(--brand-yellow);

        > h1 {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          text-transform: uppercase;
          font-weight: bold;
          font-size: 1.5rem;

          gap: 0.5rem;
          width: 100%;

          > svg {
            width: 1rem;
            height: 1rem;
          }
        }
      }

      > button {
        text-align: center;
        font-size: 1rem;

        padding: 1rem 5rem;
        border-radius: 1rem;

        cursor: pointer;
        background: var(--brand-yellow);
      }

      .authors {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        width: 100%;
        gap: 1rem;

        > span {
          font-weight: 600;
          font-size: 1rem;
        }

        > ul {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          width: 100%;

          > img {
            width: 100%;
            max-width: 2.5rem;

            border: 0.1rem solid var(--brand-yellow);
            border-radius: 50%;

            pointer-events: none;
            user-select: none;

            & + img {
              margin-left: -0.75rem;
            }
          }
        }
      }

      > svg {
        width: 2rem;
        height: 100%;

        padding: 0.45rem;
      }

      @media (min-width: 1048px) {
        background: #fdfcec;
        font-weight: 300;

        > .info {
          > h1 {
            font-size: 1.75rem;
            font-weight: 900;
          }
        }

        &:nth-child(odd) {
          align-items: flex-start;
          border-left: 0.5rem solid var(--brand-yellow);

          > button {
          }
        }

        &:nth-child(even) {
          align-items: flex-end;
          text-align: right;

          border-right: 0.5rem solid var(--brand-yellow);

          > .info {
            > h1 {
              justify-content: flex-end;
            }
          }

          .authors {
            justify-content: flex-end;

            > ul {
              justify-content: flex-end;
            }
          }
        }

        &:hover {
          background: #fdfae2;
        }
      }

      @media (max-width: 1048px) {
        border-width: 0.25rem 0;
        border-style: solid;
        border-color: var(--brand-yellow);
        flex-direction: column;

        overflow: hidden;

        &:nth-child(even) {
          background: #fdfae2;
        }

        &:nth-child(odd) {
          background: #fdfcec;
        }

        > button {
          width: 100%;
          margin: 0 auto;
        }

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

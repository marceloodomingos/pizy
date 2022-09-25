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

      > span {
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

      > svg {
        width: 2rem;
        height: 100%;

        padding: 0.45rem;
      }

      @media (min-width: 768px) {
        background: #fdfcec;
        font-weight: 300;

        > span {
          font-size: 1.75rem;
          font-weight: 900;
        }

        &:nth-child(odd) {
          border-left: 0.5rem solid var(--brand-yellow);
        }

        &:nth-child(even) {
          justify-content: flex-end;
          text-align: right;

          border-right: 0.5rem solid var(--brand-yellow);

          > span {
            justify-content: flex-end;
          }
        }

        &:hover {
          background: #fdfae2;
        }
      }

      @media (max-width: 768px) {
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

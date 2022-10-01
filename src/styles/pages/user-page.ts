import styled from "styled-components";

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
    z-index: 0;

    > img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      filter: grayscale(1);

      pointer-events: none;
      user-select: none;
      z-index: -1;
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
  padding: 0 1rem;
  z-index: 2;

  gap: 1rem;

  > .about {
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    gap: 2rem;
    color: var(--white);

    > img {
      width: 100%;
      max-width: 250px;

      border-radius: 1rem;

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
          }

          @media (max-width: 900px) {
            flex-direction: column;
            justify-content: center;

            font-size: 2rem;
            gap: 0;
          }
        }

        > p {
          font-weight: 300;
          font-size: 1rem;
        }

        @media (max-width: 900px) {
          text-align: center;
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
          }

          &:hover {
            opacity: 0.5;
          }
        }

        @media (max-width: 900px) {
          justify-content: center;
        }
      }
    }

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }
  }

  > .github-repos,
  .participated-projects {
    display: flex;
    flex-direction: column;

    color: var(--white);

    gap: 1rem;

    > ul {
      display: flex;
      flex-wrap: wrap;

      list-style: none;
      gap: 1rem;

      > li {
        display: flex;
        flex-direction: column;

        flex: 1 1 500px;
        border: 1px solid var(--white);
        border-radius: 1rem;

        padding: 1rem;

        gap: 1rem;

        > span {
          font-weight: bold;
          text-transform: capitalize;
        }
      }
    }
  }
`;

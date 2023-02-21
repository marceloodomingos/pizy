import styled from "styled-components";

export const ProjectsPresentation = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url("../../assets/background/rainbow-prisma.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  mask-image: linear-gradient(to top, transparent 0%, black 10%);

  > .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 50%;

    color: var(--white);
    gap: 2rem;

    padding: 0 2rem;
    height: 100%;

    > div {
      width: 100%;
      max-width: 640px;
    }

    .slogan {
      width: 100%;
      max-width: 640px;

      font-weight: 700;

      > span {
        background: var(--gradient-red-yellow-green-white);
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

      @media (max-width: 500px) {
        font-size: 2.5rem;
      }
    }

    > p {
      width: 100%;
      max-width: 640px;

      font-weight: 300;
    }

    @media (max-width: 900px) {
      max-width: unset;
      text-align: center;

      padding: 100px 2rem 0;
    }
  }

  @media (max-width: 900px) {
    background-position: 15% center;
    background-size: 200vw 100%;

    height: 85vh;
    max-height: 650px;
  }
`;

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  gap: 3rem;

  padding: 4rem 0;

  > h1 {
    font-size: 3rem;
    line-height: 100%;

    color: var(--white);

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
    max-width: 1400px;
    padding: 0 1rem;

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
        border-bottom: 0.1rem solid var(--black);

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
        background: var(--black);
        color: var(--white);
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

            border: 0.1rem solid var(--white);
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

      @media (min-width: 1015px) {
        background: var(--white);
        font-weight: 300;

        > .info {
          > h1 {
            font-size: 1.75rem;
            font-weight: 900;
          }
        }

        &:nth-child(odd) {
          align-items: flex-start;
          border-left: 0.5rem solid var(--black);

          > button {
          }
        }

        &:nth-child(even) {
          align-items: flex-end;
          text-align: right;

          border-right: 0.5rem solid var(--black);

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
          background: #f9f9f9;
        }
      }

      @media (max-width: 1015px) {
        border-width: 0.25rem 0;
        border-style: solid;
        border-color: var(--black);
        flex-direction: column;

        overflow: hidden;

        background: var(--white);

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

  @media (max-width: 900px) {
    padding: 2rem 0;
  }
`;

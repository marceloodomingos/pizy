import styled from "styled-components";

export const Presentation = styled.div`
  display: grid;
  grid-template-columns: 40fr 60fr;
  align-items: center;

  height: calc(100vh - 100px);
  padding-bottom: 100px;

  gap: 3rem;

  .slogan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    text-align: right;

    gap: 2rem;
    width: 100%;

    > h1 {
      font-size: 4.5rem;
      line-height: 100%;

      @media (max-width: 978px) {
        font-size: 3rem;
      }
    }

    > a {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 1rem;

      position: relative;

      text-decoration: none;
      color: var(--black);
      border-radius: 0.5rem;

      padding: 1rem 3.5rem;
      background: var(--brand-yellow);

      transition: 0.25s all ease;
    }

    @media (max-width: 978px) {
      gap: 1rem;
      align-items: center;

      text-align: center;
    }
  }

  > img {
    width: 100%;
    height: 75%;

    object-fit: cover;

    filter: drop-shadow(10px 10px 150px var(--english-violet));

    pointer-events: none;
    user-select: none;

    transform: scaleX(-1);

    /* @media (min-width: 978px) {
      max-width: 300px;
    }

    @media (max-width: 978px) {
      max-width: 150px;
    } */
  }

  @media (max-width: 978px) {
    display: flex;
    flex-direction: column-reverse;

    height: auto;
  }
`;

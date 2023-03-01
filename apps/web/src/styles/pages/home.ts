import styled, { keyframes } from "styled-components";

const blurGlow = keyframes`
  0% {
    opacity: 0.75;
  }

  100% {
    opacity: 1;
  }
`;

export const SoonProjectHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  gap: 1rem;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 4rem;

    width: 100%;
    max-width: 600px;

    text-align: center;

    .logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      position: relative;

      > img {
        width: 100%;
        max-width: 15rem;
        height: 100%;

        filter: invert(1);

        @media (max-width: 768px) {
          max-width: 10rem;
        }
      }

      .blur {
        position: absolute;

        width: 100%;
        height: 100%;

        background: linear-gradient(270deg, #7000ff 25%, #ff008a 75%);
        background-blend-mode: overlay, normal;
        filter: blur(250px);

        animation: ${blurGlow} 2s infinite alternate ease-in-out;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 1rem;

      > strong {
        font-weight: bold;

        background: #111;
        padding: 1rem;

        border-radius: 1rem;
      }
    }
  }
`;

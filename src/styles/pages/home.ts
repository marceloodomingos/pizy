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

export const HeroSection = styled.div``;

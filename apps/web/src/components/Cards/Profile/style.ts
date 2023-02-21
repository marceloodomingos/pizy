import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  display: flex;

  width: 354px;
  height: 212px;

  color: var(--white);
  padding: 1rem;

  position: relative;
  overflow: hidden;

  background: url("data:image/png;base64,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"),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.5) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  backdrop-filter: blur(40px);
  border-radius: 1rem;

  .content {
    display: flex;
    flex-direction: column;

    flex: 1;
    z-index: 2;

    .user {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      gap: 0.5rem;

      > .avatar {
        width: 100%;
        max-width: 3rem;
        height: 100%;
        max-height: 3rem;

        border-radius: 50%;
        background: var(--gradient-pink-purple);

        padding: 2px;

        > img {
          width: 100%;
          height: 100%;

          border-radius: 50%;
          object-fit: cover;

          pointer-events: none;
          user-select: none;
        }
      }

      > p {
        width: 100%;
        max-width: calc(100% - 150px);

        font-size: 1.15rem;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;

      gap: 0.5rem;
      flex: 1;

      width: 100%;
      max-width: calc(100% - 150px);

      > .github {
        display: flex;
        align-items: center;

        text-decoration: none;

        gap: 0.5rem;
        color: var(--white);

        > svg {
          width: 100%;
          max-width: 1.5rem;

          fill: var(--white);
          transition: var(--transition);
        }
      }

      > p {
        opacity: 0.5;
        font-size: 0.85rem;
      }
    }
  }

  .details {
    display: flex;

    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    max-width: 150px;
    height: 100%;

    background-image: url("../../assets/shape-detail.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;

    img {
      filter: invert(1);

      object-fit: cover;

      pointer-events: none;
      user-select: none;
    }

    > img {
      width: 100%;
      max-width: 4rem;

      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }

    > .bg {
      position: absolute;
      top: 0;
      right: 0;

      > img {
        mask-image: linear-gradient(to right, transparent 10%, black 100%);
        transform: translateX(50%);
        clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);

        opacity: 0.25;
      }
    }
  }
`;

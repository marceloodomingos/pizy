import { css } from "styled-components";

export const Variables = css`
  :root {
    // Font
    --font-main: "Roboto", sans-serif;

    // Colors
    --background: #131312;

    --white: #fff;
    --white-hover: #e6e6e6;
    --white-active: #cccccc;
    --white-dark: #bfbfbf;
    --white-dark-hover: #999999;
    --white-dark-active: #737373;
    --white-darker: #595959;

    --black-light: #e7e7e7;
    --black-light-hover: #dcdcdb;
    --black-light-active: #b6b6b6;
    --black: #131312;
    --black-hover: #111110;
    --black-active: #0f0f0e;
    --black-dark: #0e0e0e;
    --black-dark-hover: #0b0b0b;
    --black-dark-active: #090908;
    --black-darker: #070706;
    --black-full: #000000;

    --red-light: #ffe7f1;
    --red-light-hover: #ffdbea;
    --red-light-active: #ffb5d4;
    --red: #ff1074;
    --red-hover: #e60e68;
    --red-active: #cc0d5d;
    --red-dark: #bf0c57;
    --red-dark-hover: #990a46;
    --red-dark-active: #730734;
    --red-darker: #590629;

    --purple-light: #ede6fc;
    --purple-light-hover: #e4d9fb;
    --purple-light-active: #c8b1f7;
    --purple: #4c03e5;
    --purple-hover: #4403ce;
    --purple-active: #3d02b7;
    --purple-dark: #3902ac;
    --purple-dark-hover: #2e0289;
    --purple-dark-active: #220167;
    --purple-darker: #1b0150;

    // Gradients
    --gradient-pink-purple: linear-gradient(75deg, #ff1074 25%, #1700a5 75%);
    --gradient-pink-purple-50: linear-gradient(
      75deg,
      #ff107450 25%,
      #1700a550 75%
    );
    --gradient-pink-purple-black: linear-gradient(
        275.21deg,
        #000000 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(
        80.56deg,
        rgba(255, 16, 116, 0.2) 15%,
        rgba(76, 3, 229, 0.2) 50%,
        rgba(19, 19, 18, 0.2) 100%
      );
    --gradient-red-yellow-green-white: linear-gradient(
      to left,
      #ffffff 0%,
      #53af7d 30%,
      #ffa901 70%,
      #ff0000 100%
    );
    --gradient-red-yellow: linear-gradient(to left, #ffa901 30%, #ff0000 100%);
    --gradient-red-pink: linear-gradient(
      to left,
      #f36362 0%,
      #fb8282 50%,
      #ff0000 100%
    );

    // Other Values
    --transition: 0.2s ease;
    --transition-medium: 0.35s ease-in-out;
    --transition-low: 0.5s ease;
    --transition-turtle: 0.75s ease;
    --transition-slowest: 3s ease-in-out;
  }
`;

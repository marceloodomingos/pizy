import { useEffect, useState } from "react";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

import { GlobalStyles } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!isSSR && (
        <>
          <GlobalStyles />
          <Component {...pageProps} />
          <Analytics />
        </>
      )}
    </>
  );
}

export default MyApp;

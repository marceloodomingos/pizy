import { useEffect, useState } from "react";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

import { AuthContextProvider } from "../contexts/AuthContext";
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
        <AuthContextProvider>
          <GlobalStyles />
          <Component {...pageProps} />
          <Analytics />
        </AuthContextProvider>
      )}
    </>
  );
}

export default MyApp;

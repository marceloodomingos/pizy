import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { AuthContextProvider } from "~/contexts/AuthContext";
import { GlobalStyles } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <>
      {!isSSR && (
        <>
          <AuthContextProvider>
            <GlobalStyles />
            <Component {...pageProps} />
          </AuthContextProvider>
        </>
      )}
    </>
  );
}

export default MyApp;

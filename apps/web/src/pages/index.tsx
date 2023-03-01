import Head from "next/head";

import { SoonProjectHero } from "../styles/pages/home";

function Home() {
  return (
    <>
      <Head>
        <title>PIZY Group · Uma nova plataforma para programadores.</title>
      </Head>

      <main>
        <SoonProjectHero>
          <div className="container">
            <div className="logo">
              <img
                src="../../pizy-group-logo-not-filled.png"
                alt="PIZY Group"
              />

              <div className="blur" />
            </div>
          </div>
        </SoonProjectHero>
      </main>
    </>
  );
}

export default Home;

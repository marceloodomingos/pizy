import type { NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header";
import { Presentation } from "~/styles/pages/home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          PIZY · Estamos aqui para facilitar sua vida. De todas as formas.
        </title>
      </Head>

      <Header />

      <main>
        <Presentation>
          <img
            src="../f09d0cb9a5ded3d8a08c77c8dde77e-unscreen.gif"
            alt="PIZY Group Lemon"
          />
          <div className="slogan">
            <h1>Sua vida mais facilitada.</h1>
            <p>Estamos aqui para facilitar sua vida. De todas as formas.</p>

            <a href="/projects">Visitar projetos</a>
          </div>
        </Presentation>
      </main>
    </>
  );
};

export default Home;

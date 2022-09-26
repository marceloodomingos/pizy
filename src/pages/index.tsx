import type { NextPage } from "next";
import Head from "next/head";
import { ArrowRight } from "phosphor-react";
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
          <div className="slogan">
            <h1>Sua vida mais facilitada.</h1>
            <p>Estamos aqui para facilitar sua vida. De todas as formas.</p>

            <div className="actions">
              <a href="/projects">
                Projetos <ArrowRight />
              </a>
              <a href="/projects">Quero me juntar</a>
            </div>
          </div>
          <img src="../lemon.svg" alt="PIZY Group Lemon" />
        </Presentation>
      </main>
    </>
  );
};

export default Home;

import { useEffect, useState } from "react";

import axios from "axios";
import Head from "next/head";

import { auth } from "../services/firebase";
import { SoonProjectHero } from "../styles/pages/home";

function Home() {
  const [gitHubUser, setGitHubUser] = useState<any>([]);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       const {
  //         displayName,
  //         photoURL,
  //         uid,
  //         email,
  //         metadata: { creationTime, lastSignInTime },
  //       } = user;

  //       const getGitHubData = async () => {
  //         const response = await axios.get(
  //           `https://api.github.com/user/${
  //             user.photoURL
  //               .replace("https://avatars.githubusercontent.com/u/", "")
  //               .split("?")[0]
  //           }`,
  //         );

  //         const { data } = response;

  //         setGitHubUser({
  //           id: uid,
  //           username: data.login,
  //           name: displayName,
  //           avatar: photoURL,
  //           email,
  //           bio: data.bio,
  //           metadata: { creationTime, lastSignInTime },
  //           admin: false,
  //         });
  //       };

  //       getGitHubData();
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>
          PIZY · Estamos aqui para facilitar sua vida. De todas as formas.
        </title>
      </Head>

      {/* <Header light /> */}

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

          {/* {user && (
            <Link href={`/user/${gitHubUser.username}`}>
              <div className="card">
                <ProfileCard user={gitHubUser} />
              </div>
            </Link>
          )} */}
        </SoonProjectHero>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default Home;

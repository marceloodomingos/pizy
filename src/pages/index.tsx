import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import ProfileCard from "~/components/Cards/Profile";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import LoadingLemon from "~/components/Loaders/LoadingLemon";
import AuthContext from "~/contexts/AuthContext";
import { auth } from "~/services/firebase";
import { HeroSection } from "~/styles/pages/home";

const Home: NextPage = () => {
  const { user } = useContext(AuthContext);
  const [gitHubUser, setGitHubUser] = useState<any>([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const {
          displayName,
          photoURL,
          uid,
          email,
          metadata: { creationTime, lastSignInTime },
        } = user;

        const getGitHubData = async () => {
          const response = await axios.get(
            `https://api.github.com/user/${
              user.photoURL
                .replace("https://avatars.githubusercontent.com/u/", "")
                .split("?")[0]
            }`
          );

          const data = response.data;

          setGitHubUser({
            id: uid,
            username: data.login,
            name: displayName,
            avatar: photoURL,
            email,
            bio: data.bio,
            metadata: { creationTime, lastSignInTime },
            admin: false,
          });
        };

        getGitHubData();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          PIZY · Estamos aqui para facilitar sua vida. De todas as formas.
        </title>
      </Head>

      <Header light />

      <main>
        <HeroSection>
          {/* {user && (
            <Link href={`/user/${gitHubUser.username}`}>
              <div className="card">
                <ProfileCard user={gitHubUser} />
              </div>
            </Link>
          )} */}
        </HeroSection>
      </main>

      <Footer />
    </>
  );
};

export default Home;

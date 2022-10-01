import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "~/components/Header";
import { auth, db } from "~/services/firebase";
import { UserContainer, UserProfile } from "~/styles/pages/user-page";

const Members: NextPage = () => {
  const [userData, setUserData] = useState<any | null>([]);
  const [userRepos, setUserRepos] = useState<any | null>([]);
  const [projects, setProjects] = useState<any | null>([]);
  const [participatedProjects, setParticipatedProjects] = useState<any | null>(
    []
  );
  const [user, setUser] = useState<any>();
  const [admin, setAdmin] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    if (query.username) {
      const getUserData = async () => {
        await axios
          .get(`https://api.github.com/users/${query.username}`)
          .then((response) => setUserData(response.data));

        await axios
          .get(`https://api.github.com/users/${query.username}/repos`)
          .then((response) => setUserRepos(response.data));
      };

      getUserData();
    }
  }, [query.username]);

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

          const checkRole = await axios.get(
            `https://api.github.com/orgs/pizygroup/members`
          );

          if (checkRole.data.find((role) => role.login === data.login)) {
            setAdmin(true);

            setUser({
              id: uid,
              username: data.login,
              name: displayName,
              avatar: photoURL,
              bio: data.bio,
              email,
              metadata: { creationTime, lastSignInTime },
              admin: true,
            });
          } else {
            setUser({
              id: uid,
              username: data.login,
              name: displayName,
              avatar: photoURL,
              bio: data.bio,
              email,
              metadata: { creationTime, lastSignInTime },
              admin: false,
            });
          }
        };

        getGitHubData();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    db.collection("projects")
      .get()
      .then((response) => {
        setProjects(
          response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );

        setParticipatedProjects(
          projects.filter((authors) => authors.authors.includes(query.username))
        );
      });
  }, [query.username]);

  return (
    <>
      <Head>
        <title>PIZY · Perfil de {query.username}</title>
      </Head>

      <Header light absolute />

      <main>
        {userData && admin ? (
          <UserContainer>
            <UserProfile>
              <div className="about">
                <img src={user.avatar} alt={`${user.username} no GitHub`} />
                <div className="content">
                  <div className="user">
                    <span>
                      {admin && <b>Admin</b>}
                      {user.name}
                    </span>
                    <p>{user.bio}</p>
                  </div>
                  <ul className="social">
                    {user.username && (
                      <a
                        target="_blank"
                        href={`https://www.github.com/${user.username}/`}
                        title={`${user.username} no GitHub`}
                      >
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        <p>{user.username}</p>
                      </a>
                    )}

                    {userData.twitter_username && (
                      <a
                        target="_blank"
                        href={`https://www.twitter.com/${userData.twitter_username}/`}
                        title={`${user.username} no Twitter`}
                      >
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                        <p>{userData.twitter_username}</p>
                      </a>
                    )}

                    {userData.blog && (
                      <a
                        target="_blank"
                        href={`https://${userData.blog}`}
                        title={`Link externo de ${user.username}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="192"
                          height="192"
                          fill="#ffffff"
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none"></rect>
                          <path
                            d="M122.3,71.4l19.8-19.8a44.1,44.1,0,0,1,62.3,62.3l-28.3,28.2a43.9,43.9,0,0,1-62.2,0"
                            fill="none"
                            stroke="#ffffff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                          ></path>
                          <path
                            d="M133.7,184.6l-19.8,19.8a44.1,44.1,0,0,1-62.3-62.3l28.3-28.2a43.9,43.9,0,0,1,62.2,0"
                            fill="none"
                            stroke="#ffffff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                          ></path>
                        </svg>
                        <p>{userData.blog}</p>
                      </a>
                    )}
                  </ul>
                </div>
              </div>
              {participatedProjects && (
                <div className="participated-projects">
                  <h1>Participou de</h1>
                  <ul>
                    {JSON.stringify(participatedProjects)}
                    {/* {participatedProjects?.map((repo) => {
                      return (
                        <li key={repo.id} id={repo.name}>
                          <span>{repo.name}</span>
                          <p>{repo.description}</p>
                        </li>
                      );
                    })} */}
                  </ul>
                </div>
              )}

              {userRepos && (
                <div className="github-repos">
                  <h1>Respositórios próprios</h1>
                  <ul>
                    {userRepos?.map((repo) => {
                      return (
                        <li key={repo.id} id={repo.name}>
                          <span>{repo.name.replaceAll("-", " ")}</span>
                          <p>{repo.description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </UserProfile>
            <div className="bg">
              <img src={user.avatar} alt={`${user.username} no GitHub`} />
            </div>
          </UserContainer>
        ) : (
          <p>Carregando...</p>
        )}
      </main>
    </>
  );
};

export default Members;

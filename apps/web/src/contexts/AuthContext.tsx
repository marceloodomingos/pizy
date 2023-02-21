/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
import { createContext, ReactNode, useEffect, useState } from "react";

import axios from "axios";

import { auth, db, firebase } from "../services/firebase";

export type User = {
  name: string;
  login: string;
  avatar: string;
  avatar_url: string;
  email: string;
  html_url: string;
  url: string;
  bio?: string;
  blog?: string;
  followers: number;
  following: number;
  id?: string;
  metadata?: {
    creationTime: string;
    lastSignInTime: string;
  };
  admin?: boolean;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGitHub: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);
export default AuthContext;

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User | any>();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
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
            }`,
          );

          const { data } = response;

          const checkRole = await axios.get(
            `https://api.github.com/orgs/pizygroup/members`,
          );

          if (checkRole.data.find(role => role.login === data.login)) {
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
          }

          db.collection("users").doc(data.login.toLowerCase()).set({
            id: uid,
            username: data.login,
            name: displayName,
            avatar: photoURL,
            bio: data.bio,
            email,
            admin,
            metadata: { creationTime, lastSignInTime },
          });
          // .then((userRef) => {
          //   alert(`${userRef}`);
          // });
        };

        getGitHubData();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGitHub() {
    await auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    // .then((response) => {
    //   console.log(response);

    // if (response.user && response.additionalUserInfo.profile) {
    //   const {
    //     login,
    //     name,
    //     html_url,
    //     bio,
    //     location,
    //     twitter_username,
    //     blog,
    //   }: any = response.additionalUserInfo.profile;

    //   const {
    //     email,
    //     metadata: { creationTime, lastSignInTime },
    //   } = response.user;

    // setUser({
    //   name,
    //   username: login,
    //   avatar: html_url,
    //   email,
    //   metadata: { creationTime, lastSignInTime },
    //   bio,
    //   location,
    //   twitter_username,
    //   blog,
    //   admin: false,
    // });

    //   db.collection("users")
    //     .doc(user.username)
    //     .set({
    //       user,
    //       admin: false,
    //     })
    //     .then((userRef) => {
    //       alert(`${userRef}`);
    //     });
    //    }
    // });
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, signInWithGitHub }}>
      {props.children}
    </AuthContext.Provider>
  );
}

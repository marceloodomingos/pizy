import axios from "axios";
import firebase from "firebase/compat/app";
import Link from "next/link";
import { User } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import AuthContext from "~/contexts/AuthContext";
import { auth } from "~/services/firebase";
import GlassmorphismButton from "../Buttons/Glassmorphism";
import { HeaderContainer } from "./styles";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

interface HeaderProps {
  light?: boolean;
  absolute?: boolean;
}

export default function Header(props: HeaderProps) {
  const currentUrl = location.pathname;
  const { user, signInWithGitHub } = useContext(AuthContext);

  const [openMenu, setOpenMenu] = useState(false);
  const [gitHubUser, setGitHubUser] = useState<any>([]);
  const body = document.querySelector("body") as HTMLElement;

  const handleToggleMenu = () => setOpenMenu(!openMenu);

  const handleLoginWithGithub = async () => {
    try {
      await signInWithGitHub();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebase
        .auth()
        .signOut()
        .then(function () {
          setGitHubUser(null);
          alert("Você saiu da conta.");
          location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (openMenu) {
      body.classList.add("open");
    } else {
      body.classList.remove("open");
      body.removeAttribute("class");
    }
  }, [openMenu]);

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
    <HeaderContainer light={props.light} absolute={props.absolute}>
      <nav>
        <a id="logo" href="/">
          <img src="../../pizy-group-logo-not-filled.png" alt="PIZY Group" />
        </a>

        <ul className={openMenu ? "menu-opened" : null}>
          <div className="links">
            <a href="/" className={currentUrl == "/" ? "active" : ""}>
              Início
            </a>
            <a
              href="/projects"
              className={currentUrl == "/projects" ? "active" : ""}
            >
              Projetos
            </a>
            <a
              href="/members"
              className={currentUrl == "/members" ? "active" : ""}
            >
              Equipe
            </a>
            <a href="/blog" className={currentUrl == "/blog" ? "active" : ""}>
              Blog
            </a>
            <a
              href="/donation"
              className={currentUrl == "/donation" ? "active" : ""}
            >
              Doação
            </a>
          </div>

          {/* <NavigationMenu.Root>
            <NavigationMenu.List>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  Item one content
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  Item two content
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>
            <NavigationMenu.Viewport />
          </NavigationMenu.Root> */}

          <div className="actions">
            {user ? (
              <>
                <a onClick={handleLogout}>Sair</a>
                <Link href={`/user/${gitHubUser.username}`}>
                  <button
                    className="user"
                    title={`Logado como ${gitHubUser.username}.`}
                  >
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt={`Logado como ${user.login} - ${user.name}.`}
                      />
                    ) : (
                      <User />
                    )}
                  </button>
                </Link>
              </>
            ) : (
              <>
                <a onClick={handleLoginWithGithub}>
                  <GlassmorphismButton>Entrar</GlassmorphismButton>
                </a>
              </>
            )}
          </div>
        </ul>
        <button
          className={
            openMenu ? "burger-container menu-opened" : "burger-container"
          }
          onClick={handleToggleMenu}
        >
          <div className="burger">
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </button>
      </nav>
    </HeaderContainer>
  );
}

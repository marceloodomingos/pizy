import axios from "axios";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { auth, db } from "~/services/firebase";
import { FooterContainer } from "./styles";

export default function Header() {
  const [projects, setProjects] = useState([]);
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

  useEffect(() => {
    try {
      const projectsDb = async () =>
        await db
          .collection("projects")
          .get()
          .then((response) => {
            setProjects(
              response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
          });

      projectsDb();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="container">
        <a id="logo" href="/">
          <img src="../../pizy-group-logo-not-filled.png" alt="PIZY Group" />
        </a>

        <div className="links">
          <div>
            <span>PIZY Group</span>
            <ul>
              <a href="/about-us">Sobre nós</a>
              <a href="/about-us">Por que PIZY?</a>
              <a href="/signup">Seja PIZY</a>
              <a href="/sponsor">Apoiar</a>
            </ul>
          </div>

          <div>
            <span>Comunidade</span>
            <ul>
              <a href="/blog">Blog</a>
              <a href="https://discord.gg/TW3zMrtjNV" target="_blank">
                Discord
              </a>
              <a href="/donation">Doação</a>
              <a href="/explore">Explorar</a>
            </ul>
          </div>

          <div>
            <span>Navegação</span>
            <ul>
              <a href="/">Início</a>
              <a href="/projects">Projetos</a>
              <a href="/members">Equipe</a>
              <a href={gitHubUser ? `/user/${gitHubUser.username}` : "signin"}>
                Perfil
              </a>
            </ul>
          </div>

          <div>
            <span>Suporte</span>
            <ul>
              <a href="/help">Ajuda</a>
              <a href="/report">
                Erros e <i>Bugs</i>
              </a>
              <a href="/help">FAQ</a>
              <a href="/contact">Contato</a>
            </ul>
          </div>

          {projects && projects.length > 0 && (
            <div>
              <span>Feitos pela PIZY</span>
              <ul>
                {projects.slice(0, 4).map((project) => (
                  <a key={project.name} href={project.homepage} target="_blank">
                    {project.name}
                  </a>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="social">
          <a
            target="_blank"
            href="https://www.github.com/pizygroup/"
            title="PIZY no GitHub"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/pizygroup/"
            title="PIZY no Instagram"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </a>

          <a
            target="_blank"
            href="https://twitter.com/pizygroup"
            title="PIZY no Twitter"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>

          <a
            target="_blank"
            href="https://discord.gg/TW3zMrtjNV"
            title="PIZY no Discord"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
              <g>
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </g>
            </svg>
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/groups/9249180/"
            title="PIZY no LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path d="M212,28H44A16,16,0,0,0,28,44V212a16,16,0,0,0,16,16H212a16,16,0,0,0,16-16V44A16,16,0,0,0,212,28ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.8-1.8A36,36,0,0,1,184,140Z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="legal-content">
        <div className="links">
          <p>
            © 2022 - {year} <b>PIZY Group</b>.
          </p>

          <ul>
            <a href="">Política de Privacidade</a>
            <a href="">Política de Reembolso</a>
            <a href="">Termos de Uso e Serviços</a>
            <a href="">Cookies</a>
          </ul>
        </div>

        <p>
          Todos os direitos reservados. <b>PIZY</b>, sua logo, seus projetos e
          seus respectivos logotipos, são de autoria <b>PIZY Group</b>. Outras
          marcas e nomes de produtos são marcas registradas de seus respectivos
          donos.
        </p>
      </div>
    </FooterContainer>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   let projects = [];

//   try {
//     await db
//       .collection("projects")
//       .get()
//       .then((response) => {
//         projects.push(
//           response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//         );
//       });
//   } catch (e) {
//     console.log(e);
//   }

//   return {
//     props: {
//       ProjectsDb: projects,
//     },
//     revalidate: 10,
//   };
// };

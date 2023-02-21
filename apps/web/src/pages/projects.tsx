import { Key, useEffect, useState } from "react";

import axios from "axios";
import Head from "next/head";

import Header from "../components/Header";
import LoadingLemon from "../components/Loaders/LoadingLemon";
import listLinkProjects from "../data/projects.json";
import { ProjectsList, ProjectsPresentation } from "../styles/pages/projects";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectsScreenshots, setProjectsScreenshots] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const listProjects = await listLinkProjects.map(
        async (project: { url: any; authors: any }) => {
          const response: any = await axios({
            url: project.url,
          });

          return {
            url: project.url,
            authors: project.authors,
            name: response.data.name,
            description: response.data.description,
            homepage: response.data.homepage,
            topics: [response.data.topics],
            stars: response.data.stargazers_count,
            forks: response.data.forks,
            watchers: response.data.watchers_count,
            createdAt: response.data.created_at,
            updatedAt: response.data.updated_at,
            pushedAt: response.data.pushed_at,
          };
        },
      );

      const listProjectsResults = await Promise.all(listProjects);
      setProjects(listProjectsResults);

      // const getScreenshot = async () => {
      //   const projectScreenshot = await fetch(
      //     `https://api.apiflash.com/v1/urltoimage?access_key=fec1087a88fe4d3992c2af2bab16a066&url=${listProjectsResults[0].homepage}`
      //   );

      //   setProjectsScreenshots((prev) => [...prev, projectScreenshot.url]);
      // };

      // getScreenshot();
    };

    getProjects();
  }, [listLinkProjects]);

  return (
    <>
      <Head>
        <title>
          PIZY · Descubra nossos projetos e veja qual pode te ajudar!
        </title>
      </Head>

      <Header light absolute />

      <main>
        <ProjectsPresentation>
          <div className="content">
            <h1 className="slogan">
              Sua solução <span>descomplicada</span> aqui.
            </h1>
            <p>
              Projetos que visam facilitar sua vida ou, ao menos, entretê-lo.
            </p>
          </div>
        </ProjectsPresentation>

        <ProjectsList>
          <h1>Projetos PIZY</h1>
          {projects ? (
            <ul>
              {projects.map(project => {
                return (
                  // eslint-disable-next-line react/jsx-no-useless-fragment
                  <>
                    {projects && (
                      <a
                        key={project.name}
                        href={project.homepage}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {/* <img src={projectsScreenshots[index]} /> */}

                        <div className="info">
                          <h1>{project.name}</h1>
                          <p>{project.description}</p>
                        </div>

                        {project.authors && (
                          <div className="authors">
                            <span>Desenvolvido por</span>
                            <ul>
                              {project.authors.map((user: Key) => {
                                return (
                                  <img
                                    key={user}
                                    src={`https://github.com/${user}.png`}
                                    alt={`${user}`}
                                  />
                                );
                              })}
                            </ul>
                          </div>
                        )}

                        <button type="button">Visitar projeto</button>
                      </a>
                    )}
                  </>
                );
              })}
            </ul>
          ) : (
            <LoadingLemon />
          )}
        </ProjectsList>
      </main>
    </>
  );
}

export default Projects;

import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "~/components/Header";

import listLinkProjects from "~/data/projects.json";
import { ProjectsList } from "~/styles/pages/projects";

const Projects: NextPage = () => {
  const [projects, setProjects] = useState([]);
  const [projectsScreenshots, setProjectsScreenshots] = useState([]);

  useEffect(() => {
    const getMembersBio = async () => {
      const listProjects = await listLinkProjects.map(async (project) => {
        const response: any = await axios({
          url: project.url,
        });

        return {
          url: project.url,
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
      });

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

    getMembersBio();
  }, [listLinkProjects]);

  return (
    <>
      <Head>
        <title>
          PIZY · Descubra nossos projetos e veja qual pode te ajudar!
        </title>
      </Head>

      <Header />

      <main>
        <ProjectsList>
          <h1>Projetos PIZY</h1>
          {projects && (
            <ul>
              {projects.map((project, index) => {
                return (
                  <>
                    {projects && (
                      <a
                        key={project.name}
                        href={project.homepage}
                        target="_blank"
                      >
                        {/* <img src={projectsScreenshots[index]} /> */}
                        <span>{project.name}</span>
                        <p>{project.description}</p>
                      </a>
                    )}
                  </>
                );
              })}
            </ul>
          )}
        </ProjectsList>
      </main>
    </>
  );
};

export default Projects;
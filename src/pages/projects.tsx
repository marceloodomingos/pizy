import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "~/components/Header";

import listLinkProjects from "~/data/projects.json";
import { ProjectsList } from "~/styles/pages/projects";

const Home: NextPage = () => {
  const [projects, setProjects] = useState([]);

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
              {projects
                .sort((a, b) => a - b)
                .map((project) => {
                  return (
                    <>
                      {projects && (
                        <a
                          key={project.name}
                          href={project.homepage}
                          target="_blank"
                        >
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

export default Home;

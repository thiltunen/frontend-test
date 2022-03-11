import { useState, createContext, useEffect, ReactNode, FC } from "react";
import { projectsMock, Project } from "mockData/projects";

interface IProjectsContext {
  projects: Project[];
  addProject: (newProject: Project) => void;
  deleteProject: (id: string) => void;
}

export const ProjectsContext = createContext<IProjectsContext>({
  projects: [],
  addProject: () => {},
  deleteProject: () => {},
});

export const ProjectsProvider: FC<ReactNode> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const projectsData = JSON.parse(localStorage.getItem("projects")!); // Possible to return mockData if localStorage got cleared
    setProjects(projectsData || projectsMock);
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (newProject: Project) => {
    setProjects((prevProjects: Project[]) => [...prevProjects, newProject]);
  };

  const deleteProject = (id: string) => {
    setProjects((prevProjects: Project[]) =>
      prevProjects.filter((item) => item.id !== id)
    );
  };

  return (
    <ProjectsContext.Provider value={{ projects, addProject, deleteProject }}>
      {children}
    </ProjectsContext.Provider>
  );
};

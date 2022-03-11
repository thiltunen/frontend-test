import { useState, createContext, useEffect, ReactNode, FC } from 'react';
import { projectsMock, Project } from 'mockData/projects';

interface IProjectsContext {
  projects: Project[];
  addProject: (newProject: Project) => void;
  deleteProject: (id: string) => void;
  sortByRating: (sortAscending: boolean) => void;
  sortByDate: (sortAscending: boolean) => void;
}

export const ProjectsContext = createContext<IProjectsContext>({
  projects: [],
  addProject: () => {},
  deleteProject: () => {},
  sortByRating: () => {},
  sortByDate: () => {},
});

export const ProjectsProvider: FC<ReactNode> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const projectsData = JSON.parse(localStorage.getItem('projects')!);

    // Possible to return mockData if localStorage got cleared
    setProjects(projectsData || projectsMock);
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (newProject: Project) => {
    setProjects((prevProjects: Project[]) => [...prevProjects, newProject]);
  };

  const deleteProject = (id: string) => {
    setProjects((prevProjects: Project[]) =>
      prevProjects.filter((item) => item.id !== id)
    );
  };

  const sortByRating = (sortAscending: boolean) => {
    setProjects([
      ...projects.sort((a, b) =>
        sortAscending ? a.rating - b.rating : b.rating - a.rating
      ),
    ]);
  };

  const sortByDate = (sortAscending: boolean) => {
    setProjects([
      ...projects.sort((a, b) =>
        sortAscending
          ? new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf()
          : new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
      ),
    ]);
  };

  return (
    <ProjectsContext.Provider
      value={{ projects, addProject, deleteProject, sortByRating, sortByDate }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

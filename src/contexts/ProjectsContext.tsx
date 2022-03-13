import { useState, createContext, useEffect, ReactNode, FC } from 'react';
import { projectsMock, Project } from 'mockData/projects';

interface IProjectsContext {
  projects: Project[];
  addProject: (newProject: Project) => void;
  deleteProject: (id: string) => void;
  sortByRating: (sortAscending: boolean) => void;
  sortByDate: (sortAscending: boolean) => void;
  updateColors: boolean;
  updateColorsOnRender: () => void;
}

export const ProjectsContext = createContext<IProjectsContext>({
  projects: [],
  addProject: () => {},
  deleteProject: () => {},
  sortByRating: () => {},
  sortByDate: () => {},
  updateColors: false,
  updateColorsOnRender: () => {},
});

export const ProjectsProvider: FC<ReactNode> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [updateColors, setUpdateColors] = useState(false);

  useEffect(() => {
    const projectsList =
      JSON.parse(localStorage.getItem('projects')!) || projectsMock;

    setProjects(projectsList);
  }, []);

  const updateColorsOnRender = () => setUpdateColors(!updateColors);

  const addProject = (newProject: Project) => {
    const projectsList = [...projects, newProject];
    setProjects(projectsList);

    localStorage.setItem('projects', JSON.stringify(projectsList));
  };

  const deleteProject = (id: string) => {
    const projectsList = projects.filter((project) => project.id !== id);
    setProjects(projectsList);

    localStorage.setItem('projects', JSON.stringify(projectsList));
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
      value={{
        projects,
        addProject,
        deleteProject,
        sortByRating,
        sortByDate,
        updateColors,
        updateColorsOnRender,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

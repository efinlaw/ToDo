import projectFactory from '../models/project';
import { loadProject } from '../views/ui';

const projectManager = () => {
  const projects = [];

  const initialize = () => {
    projects.push(projectFactory('Home'));
    projects.push(projectFactory('Today'));
    projects.push(projectFactory('This Week'));

    // Load the home page
    loadProject(projects[0]);
  };

  const getProject = (title) => projects.find((project) => project.getTitle() === title);

  const addProject = (project) => projects.push(project);

  const deleteProject = (title) => {
    const foundIndex = projects.findIndex((project) => project.getTitle === title);
    delete projects[foundIndex];
  };

  return {
    initialize, getProject, addProject, deleteProject,
  };
};

export default projectManager;

import projectFactory from '../models/project';

const projectManager = () => {
  const projects = [];

  const initialize = () => {
    projects.push(projectFactory('Home'));
    projects.push(projectFactory('Today'));
    projects.push(projectFactory('This Week'));
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

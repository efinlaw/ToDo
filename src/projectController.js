import projectFactory from './project';

const createProject = (title) => {
  const newProject = projectFactory(title);

  return newProject;
};

import projectFactory from '../models/project';

const createProject = (title) => {
  const newProject = projectFactory(title);

  return newProject;
};

import projectFactory from './models/project';

const ToDoList = () => {
  const projects = [];

  const initializeApp = () => {
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
    initializeApp, getProject, addProject, deleteProject,
  };
};

export default ToDoList;

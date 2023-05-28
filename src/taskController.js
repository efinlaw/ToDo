import taskFactory from './task';

const createTask = (title, description, dueDate, priority, project) => {
  const newTask = taskFactory(title, description, dueDate, priority, project);
};

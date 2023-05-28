export default taskFactory = (title, description, dueDate, priority, project) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getProject = () => project;

  return {
    getTitle, getDescription, getDueDate, getPriority, getProject,
  };
};

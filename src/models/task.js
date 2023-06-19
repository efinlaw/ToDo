const taskFactory = (title, description, dueDate, priority, project) => {
  let taskTitle = title;
  let taskDescription = description;
  let taskDueDate = dueDate;
  let taskPriority = priority;
  let taskProject = project;
  const getTitle = () => taskTitle;
  const setTitle = (newTitle) => { taskTitle = newTitle; };
  const getDescription = () => taskDescription;
  const setDescription = (newDescription) => { taskDescription = newDescription; };
  const getDueDate = () => taskDueDate;
  const setDueDate = (newDueDate) => { taskDueDate = newDueDate; };
  const getPriority = () => taskPriority;
  const setPriority = (newPriority) => { taskPriority = newPriority; };
  const getProject = () => taskProject;
  const setProject = (newProject) => { taskProject = newProject; };

  const editTask = (...params) => {
    setTitle(params[0]);
    setDescription(params[1]);
    setDueDate(params[2]);
    setPriority(params[3]);
    setProject(params[4]);
  };

  return {
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
    getProject,
    setProject,
    editTask,
  };
};

export default taskFactory;

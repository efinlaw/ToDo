const taskFactory = (title, description, dueDate, priority, project) => {
  const self = this;
  self.title = title;
  self.description = description;
  self.dueDate = dueDate;
  self.priority = priority;
  self.project = project;
  const getTitle = () => self.title;
  const setTitle = (newTitle) => { self.title = newTitle; };
  const getDescription = () => description;
  const setDescription = (newDescription) => { self.description = newDescription; };
  const getDueDate = () => dueDate;
  const setDueDate = (newDueDate) => { self.dueDate = newDueDate; };
  const getPriority = () => priority;
  const setPriority = (newPriority) => { self.priority = newPriority; };
  const getProject = () => project;
  const setProject = (newProject) => { self.project = newProject; };

  const editTask = (...params) => {
    self.setTitle(params[0]);
    self.setDescription(params[1]);
    self.setDueDate(params[2]);
    self.setPriority(params[3]);
    self.setProject(params[4]);
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

const projectFactory = (title) => {
  const taskList = [];
  const projTitle = title;
  const getTitle = () => projTitle;
  const addTask = (task) => {
    taskList.push(task);
  };

  return { getTitle, addTask };
};

export default projectFactory;

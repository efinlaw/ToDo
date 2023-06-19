const projectFactory = (title) => {
  let projTitle = title;
  const taskList = [];

  const getTitle = () => projTitle;

  const editTitle = (newTitle) => { projTitle = newTitle; };

  const addTask = (task) => {
    taskList.push(task);
  };

  const getTask = (index) => taskList[index];

  const deleteTask = (index) => {
    delete taskList[index];
  };

  return {
    getTitle, editTitle, addTask, getTask, deleteTask,
  };
};

export default projectFactory;

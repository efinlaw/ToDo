const projectFactory = (title) => {
  const taskList = [];
  let projTitle = title;

  const getTitle = () => projTitle;

  const editTitle = (newTitle) => {
    projTitle = newTitle;
  };

  const addTask = (task) => {
    this.taskList.push(task);
  };

  const getTask = (index) => this.taskList[index];

  const deleteTask = (index) => {
    delete taskList[index];
  };

  return {
    getTitle, editTitle, addTask, getTask, deleteTask,
  };
};

export default projectFactory;

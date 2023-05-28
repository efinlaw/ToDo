export default projectFactory = (title) => {
  const taskList = [];
  const getTitle = () => title;

  return { getTitle };
};

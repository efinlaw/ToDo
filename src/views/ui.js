import projectFactory from '../models/project';

const createProjectView = (project) => {
  const name = document.createElement('h2');
  name.classList.add('project-name');
  name.textContent = project.getTitle();
  const header = document.createElement('div');
  header.classList.add('task-header');

  const title = document.createElement('p');
  title.textContent = 'Title';
  const description = document.createElement('p');
  description.textContent = 'Description';
  const priority = document.createElement('p');
  priority.textContent = 'Priority';
  const dueDate = document.createElement('p');
  dueDate.textContent = 'Due Date';

  header.appendChild(title);
  header.appendChild(description);
  header.appendChild(priority);
  header.appendChild(dueDate);

  const addTask = document.createElement('button');
  addTask.classList.add('add-task');
  addTask.textContent = 'Add Task';

  const container = document.querySelector('.todo-container');
  container.appendChild(name);
  container.appendChild(header);
  container.appendChild(addTask);
};

const createNewProject = (project) => {
  const newProject = document.createElement('h3');
  newProject.classList.add('project-name');
  newProject.classList.add('project-clickable');
  const projectLink = document.createElement('a');
  projectLink.href = '#';
  projectLink.textContent = project.getTitle();
  newProject.appendChild(projectLink);

  const projects = document.querySelector('.projects');
  projects.appendChild(newProject);
};

const loadProject = (project) => {
  const container = document.querySelector('.todo-container');
  container.innerHTML = '';
  createProjectView(project);
};

export { createNewProject, loadProject };
